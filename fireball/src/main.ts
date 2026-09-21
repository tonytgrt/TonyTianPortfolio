// The portfolio hero's background. This is a copy of the 566-hw1 fireball
// project, reworked to live behind the page: it draws into the hero's canvas
// rather than a full-window one, and has none of the standalone project's
// on-screen tooling.
import {vec3} from 'gl-matrix';
import Icosphere from './geometry/Icosphere';
import Square from './geometry/Square';
import OpenGLRenderer from './rendering/gl/OpenGLRenderer';
import Camera from './Camera';
import {setGL} from './globals';
import ShaderProgram, {Shader, FireballParams, BackgroundParams} from './rendering/gl/ShaderProgram';

import lambertVertSource from './shaders/lambert-vert.glsl?raw';
import lambertFragSource from './shaders/lambert-frag.glsl?raw';
import backgroundVertSource from './shaders/background-vert.glsl?raw';
import backgroundFragSource from './shaders/background-frag.glsl?raw';

// Off for now: only the background quad (the planet and starfield) is drawn.
// Set this to true to put the flame back in front of it.
const SHOW_FIREBALL = false;

// Full device resolution on a high-DPI screen quadruples the fragment work for
// a backdrop that is mostly soft noise, so the pixel ratio is capped.
const MAX_PIXEL_RATIO = 1.5;

// The art-directed defaults from the standalone project. There is no dat.GUI
// panel here, so these are simply the values the shaders get.
const params: FireballParams & BackgroundParams & {tesselations: number} = {
  tesselations: 5,
  displacement: 0.18,   // amplitude of the low-frequency upward sway
  lobeScale: 1.2,       // frequency of that sway
  detail: 0.37,         // amplitude of the high-frequency FBM, which forms the licks
  detailScale: 6,     // frequency of that FBM
  octaves: 5,           // how many FBM octaves get summed
  roilSpeed: 1.1,       // how fast the flame streams upward
  pulsePeriod: 4.7,     // seconds per surge cycle
  pulseStrength: 0.59,  // 0 holds the flame steady, 1 is the full surge
  heat: 0.5,            // 0.5 is the gradient as authored, higher runs hotter
  flow: 0.42,           // how strongly flowing noise warps the color gradient
  bandBlend: 0.79,      // 0 gives hard cel band edges, 1 an unbroken gradient
  flameHeight: 1.5,     // vertical stretch from sphere to flame
  taper: 0.12,          // how far the crown is drawn in relative to the root
  bands: 12,             // quantized color bands; below 2 the gradient is smooth
  horizon: -0.3,        // where the planet's limb crosses the centre of the screen
  atmosphere: 0.028,    // thickness of the atmospheric halo above the limb
};

// Everything only the flame needs, created only when it is shown.
interface Fireball {
  camera: Camera;
  lambert: ShaderProgram;
  icosphere: Icosphere;
}

function createFireball(gl: WebGL2RenderingContext, canvas: HTMLCanvasElement): Fireball {
  // Eye, target and up, all three read off the console readout in Camera.ts.
  // The up vector is the one that tilts the flame; without it the view comes
  // back upright however the eye is placed.
  const camera = new Camera(canvas,
                            vec3.fromValues(4.48, 1.01, -1.98),
                            vec3.fromValues(0, 0, 0),
                            vec3.fromValues(-0.12, 0.69, -0.72));

  const lambert = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, lambertVertSource),
    new Shader(gl.FRAGMENT_SHADER, lambertFragSource),
  ]);

  const icosphere = new Icosphere(vec3.fromValues(0, 0, 0), 1, params.tesselations);
  icosphere.create();

  return {camera, lambert, icosphere};
}

function main() {
  const canvas = <HTMLCanvasElement> document.getElementById('hero-canvas');
  if (!canvas) {
    return;
  }
  const gl = canvas.getContext('webgl2');
  // Without WebGL 2 the hero just keeps its plain CSS background.
  if (!gl) {
    return;
  }
  // `setGL` is a function imported above which sets the value of `gl` in the `globals.ts` module.
  // Later, we can import `gl` from `globals.ts` to access it
  setGL(gl);

  const square = new Square(vec3.fromValues(0, 0, 0));
  square.create();

  const renderer = new OpenGLRenderer(canvas);
  // The background covers every pixel, so this only shows if it fails to draw.
  renderer.setClearColor(0.004, 0.006, 0.014, 1);

  const background = new ShaderProgram([
    new Shader(gl.VERTEX_SHADER, backgroundVertSource),
    new Shader(gl.FRAGMENT_SHADER, backgroundFragSource),
  ]);

  const fireball = SHOW_FIREBALL ? createFireball(gl, canvas) : null;

  // Match the drawing buffer to the canvas's CSS size, which follows the hero
  // section rather than the window. Checked every frame, so a resize, a change
  // of pixel ratio, or the hero's own min/max height all come out right.
  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, MAX_PIXEL_RATIO);
    const width = Math.max(1, Math.round(canvas.clientWidth * ratio));
    const height = Math.max(1, Math.round(canvas.clientHeight * ratio));
    if (canvas.width === width && canvas.height === height) {
      return;
    }
    renderer.setSize(width, height);
    if (fireball) {
      fireball.camera.setAspectRatio(width / height);
      fireball.camera.updateProjectionMatrix();
    }
  }

  const startTime = performance.now();
  let frame = 0;

  // This function will be called every frame
  function tick() {
    resize();
    // Seconds since the program started, passed to the shaders so their
    // displacement and color animate over time.
    const time = (performance.now() - startTime) * 0.001;
    gl.viewport(0, 0, canvas.width, canvas.height);
    renderer.clear();

    // The background is a screen-space quad drawn before anything else. With
    // the depth test off it neither tests nor writes depth, so it can never
    // occlude the flame no matter where the camera is.
    gl.disable(gl.DEPTH_TEST);
    background.setTime(time);
    background.setDimensions(canvas.width, canvas.height);
    background.setBackgroundParams(params);
    background.draw(square);

    if (fireball) {
      gl.enable(gl.DEPTH_TEST);
      fireball.camera.update();
      fireball.lambert.setTime(time);
      fireball.lambert.setFireballParams(params);
      renderer.render(fireball.camera, fireball.lambert, [fireball.icosphere]);
    }

    // Tell the browser to call `tick` again whenever it renders a new frame
    frame = requestAnimationFrame(tick);
  }

  // Only animate while the hero is on screen. Once the visitor scrolls down to
  // the rest of the page there is nothing to see, so the loop stops entirely.
  // Time keeps running from `startTime`, so the scene picks up where it would be.
  const observer = new IntersectionObserver((entries) => {
    const visible = entries[entries.length - 1].isIntersecting;
    if (visible && !frame) {
      frame = requestAnimationFrame(tick);
    } else if (!visible && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  });
  observer.observe(canvas);
}

main();
