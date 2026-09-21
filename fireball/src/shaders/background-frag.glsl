#version 300 es

// Procedural background: an Earth-sized sphere filling the lower part of the
// frame, its atmosphere fading up into starfield. Nothing here is textured or
// modelled - the planet is a single circle whose centre sits far below the
// screen, shaded as a sphere and surfaced with noise.
precision highp float;

uniform float u_Time;        // Seconds since start, for star twinkle.
uniform vec2  u_Dimensions;  // Canvas size in pixels, used only for the aspect ratio.
uniform float u_Horizon;     // Screen height at which the limb crosses the centre line.
uniform float u_Atmosphere;  // Thickness of the atmospheric halo, as a fraction of the radius.

// The scroll-driven landing, set from Descent.ts. At the top of the page they
// leave the scene exactly as the standalone project drew it: no pan, both zooms
// 1, no fog, no fade.
uniform float u_Pan;         // 0 at rest, 1 once the camera looks straight at the planet's centre.
uniform float u_Zoom;        // Magnification of the ground, about the middle of the screen.
uniform float u_CloudZoom;   // Magnification of the cloud layer. It is nearer the camera, so it
                             // grows faster than the ground: the parallax that makes the zoom
                             // read as a fall rather than a picture being enlarged.
uniform float u_Spin;        // How far the planet has turned, in radians.
uniform float u_CloudDrift;  // How far the clouds have drifted through their noise.
uniform float u_Fog;         // 0 to 1: the white-out of dropping through the cloud deck.
uniform float u_Fade;        // 0 to 1: the blend into the page's own background colour.

in vec2 fs_Pos;

out vec4 out_Col;

// ---------------------------------------------------------------------------
// Scene constants
// ---------------------------------------------------------------------------

// Far larger than the screen, which is the whole trick: only a shallow arc of
// the circle is ever visible, so it reads as the limb of something enormous
// rather than as a ball sitting in frame.
const float EARTH_RADIUS = 3.2;

// A perfectly level horizon reads as a flat backdrop. A few degrees of tilt is
// what makes it read as a planet seen from orbit.
const float TILT = -0.17;

// Off the top-right corner, matching the glow drawn at the same place below.
const vec3 SUN_DIR = normalize(vec3(0.55, 0.62, 0.56));

const vec3 SPACE         = vec3(0.004, 0.006, 0.014);
const vec3 OCEAN_DEEP    = vec3(0.008, 0.028, 0.098);
const vec3 OCEAN_SHALLOW = vec3(0.034, 0.125, 0.305);
const vec3 LAND          = vec3(0.115, 0.120, 0.105);
const vec3 CLOUD         = vec3(0.920, 0.940, 0.970);
const vec3 SKY           = vec3(0.350, 0.620, 1.000); // atmospheric scattering tint
const vec3 FOG           = vec3(0.955, 0.965, 0.980); // inside the cloud deck
const vec3 PAGE          = vec3(250.0 / 255.0);       // the content page's background, rgb(250, 250, 250)

// The stars and the sun are far beyond the planet, so while the camera pans
// they slide by at only this fraction of its speed.
const float SKY_PARALLAX = 0.2;

// Zooming in adds octaves of noise so the surface keeps its detail; this caps
// how many, since by the deepest zoom the fog covers everything anyway.
const int MAX_OCTAVES = 11;

// ---------------------------------------------------------------------------
// Noise. GLSL has no include mechanism, so this is the same value-noise
// construction the other two shaders use, with a 2D hash added for the stars.
// ---------------------------------------------------------------------------

float hash31(vec3 p)
{
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yxz + 33.33);
    return fract((p.x + p.y) * p.z);
}

float hash21(vec2 p)
{
    vec3 q = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    q += dot(q, q.yzx + 33.33);
    return fract((q.x + q.y) * q.z);
}

float valueNoise(vec3 p)
{
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);

    float n000 = hash31(i + vec3(0.0, 0.0, 0.0));
    float n100 = hash31(i + vec3(1.0, 0.0, 0.0));
    float n010 = hash31(i + vec3(0.0, 1.0, 0.0));
    float n110 = hash31(i + vec3(1.0, 1.0, 0.0));
    float n001 = hash31(i + vec3(0.0, 0.0, 1.0));
    float n101 = hash31(i + vec3(1.0, 0.0, 1.0));
    float n011 = hash31(i + vec3(0.0, 1.0, 1.0));
    float n111 = hash31(i + vec3(1.0, 1.0, 1.0));

    return mix(mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
               mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y),
               u.z);
}

// The octave count is fractional: the last octave fades in by its fraction, so
// detail grows smoothly with the zoom instead of popping in an octave at a time.
float fbm(vec3 p, float octaves)
{
    float sum = 0.0, amp = 0.5, freq = 1.0, norm = 0.0;
    for (int i = 0; i < MAX_OCTAVES; ++i)
    {
        float weight = clamp(octaves - float(i), 0.0, 1.0);
        if (weight <= 0.0) break;
        sum  += weight * amp * valueNoise(p * freq + float(i) * 17.3);
        norm += weight * amp;
        amp  *= 0.5;
        freq *= 2.0;
    }
    return sum / norm;
}

vec2 rotate2(vec2 v, float a)
{
    float c = cos(a), s = sin(a);
    return vec2(v.x * c - v.y * s, v.x * s + v.y * c);
}

// The point on the planet under a scene position, as a unit normal: the sphere
// reconstructed from the disc coordinate, then turned about the pole by the
// planet's spin. `toward` is measured from the planet's centre.
vec3 surfacePoint(vec2 toward)
{
    vec2  uv = toward / EARTH_RADIUS;
    float z  = sqrt(max(0.0, 1.0 - min(1.0, dot(uv, uv))));
    vec3  n  = vec3(uv, z);
    float ca = cos(u_Spin), sa = sin(u_Spin);
    return vec3(n.x * ca + n.z * sa, n.y, -n.x * sa + n.z * ca);
}

// One star per grid cell at most, placed at a hashed position inside it. Most
// cells are left empty, which is what keeps the field sparse and irregular
// rather than looking like a dot screen.
float starField(vec2 p)
{
    vec2  cell = floor(p);
    vec2  f    = fract(p);
    float h    = hash21(cell);

    if (h < 0.90) {
        return 0.0;
    }

    vec2  pos = vec2(hash21(cell + 11.3), hash21(cell + 27.7));
    float mag = (h - 0.90) / 0.10;

    // Slow, per-star-offset twinkle.
    float twinkle = 0.7 + 0.3 * sin(u_Time * 1.7 + h * 63.0);

    return mag * twinkle * smoothstep(0.07, 0.0, length(f - pos));
}

void main()
{
    // Aspect-correct screen coordinates: y stays in [-1, 1] and x widens with
    // the canvas, so the planet stays circular at any window shape.
    vec2 screen = fs_Pos;
    screen.x *= u_Dimensions.x / max(1.0, u_Dimensions.y);

    // The scene is tilted so the limb runs diagonally across the frame, which
    // puts the planet's centre below and a little to the right of the screen.
    // The camera pans toward that point, then zooms in about the middle.
    vec2 center = vec2(0.0, u_Horizon - EARTH_RADIUS);
    vec2 look   = rotate2(center, -TILT) * u_Pan;
    vec2 p      = look + screen / u_Zoom;
    vec2 q      = rotate2(p, TILT);

    vec2  toward = q - center;
    float dist   = length(toward);
    float t      = dist / EARTH_RADIUS;   // exactly 1.0 on the limb

    // ---- space ------------------------------------------------------------
    // Too far away to zoom, and panning past at a fraction of the speed.
    vec2 sky   = screen + look * SKY_PARALLAX;
    vec3 color = SPACE;
    color += vec3(1.0, 0.97, 0.93) * starField(rotate2(sky, TILT) * 28.0);

    // A distant sun just off the top-right corner. It is the same direction
    // that lights the planet, so the whole frame agrees on where the light is.
    float sunDist = length(sky - vec2(1.35, 0.78));
    color += vec3(1.0, 0.95, 0.88) * 0.16 / (1.0 + 26.0 * sunDist * sunDist);

    // ---- atmosphere -------------------------------------------------------
    // Outside the disc the air thins exponentially into vacuum. This is the
    // band that blends the planet into the black at the top of the frame.
    float halo = clamp(exp(-(dist - EARTH_RADIUS)
                           / max(0.001, u_Atmosphere * EARTH_RADIUS)), 0.0, 1.0);

    // Only the sunlit side of the limb scatters, so the halo fades out around
    // the unlit edge instead of ringing the planet evenly.
    vec2  limbDir   = toward / max(1e-4, dist);
    float haloLight = smoothstep(-0.45, 0.90, dot(vec3(limbDir, 0.0), SUN_DIR));

    color += SKY * halo * haloLight * 0.9;

    // ---- planet surface ---------------------------------------------------
    // Reconstruct the sphere's normal from the disc coordinate, which is what
    // lets the surface be shaded and textured as a sphere rather than a circle.
    vec2  uv = toward / EARTH_RADIUS;
    float z  = sqrt(max(0.0, 1.0 - min(1.0, dot(uv, uv))));
    vec3  n  = vec3(uv, z);

    // The lookup turns slowly about the pole so the planet rotates under us.
    vec3 sp = surfacePoint(toward);

    // Every doubling of the zoom gets another octave, so the coastlines keep
    // their detail all the way down.
    float continents = fbm(sp * 1.8, 4.0 + log2(u_Zoom));
    vec3  surface    = mix(OCEAN_DEEP, OCEAN_SHALLOW, smoothstep(0.30, 0.56, continents));
    surface = mix(surface, LAND, smoothstep(0.54, 0.62, continents));

    // Clouds are a second, finer field drifting at its own rate, so they slide
    // over the continents instead of being locked to them. Two layers at
    // different scales keep the banks from reading as one blurry blob. They
    // sit nearer the camera than the ground, so they are looked up through
    // their own, faster zoom.
    vec2  cloudToward = rotate2(look + screen / u_CloudZoom, TILT) - center;
    vec3  cloudPos    = surfacePoint(cloudToward) * 6.5 + vec3(0.0, 0.0, u_CloudDrift);
    float cloudDetail = log2(u_CloudZoom);
    float clouds      = fbm(cloudPos, 5.0 + cloudDetail) * 0.72
                      + fbm(cloudPos * 2.7, 4.0 + cloudDetail) * 0.28;
    // Nearing the deck, the clouds thicken: they spread out from the banks into
    // the gaps until they close over entirely, so the camera flies into them
    // rather than just watching the picture turn white. Measured in doublings
    // of the cloud zoom, which is how the approach to the deck feels.
    float approach   = clamp((log2(u_CloudZoom) - 2.0) / 4.5, 0.0, 1.0);
    float cloudCover = smoothstep(0.47, 0.66, clouds + 0.3 * approach);
    surface = mix(surface, CLOUD, cloudCover * 0.88);

    // Wrapped diffuse. A hard terminator would put half the disc in shadow; the
    // reference is lit from over the shoulder with the night side out of frame.
    // Kept deliberately below 1.0 at the top end: the planet is a backdrop, and
    // a brighter one would swallow the white-hot base of the flame in front.
    float light = smoothstep(-0.35, 0.85, dot(n, SUN_DIR));
    surface *= mix(0.04, 0.92, light);

    // Along the limb the line of sight passes through far more air than it does
    // looking straight down, so the last sliver of the disc washes out to blue.
    surface = mix(surface, SKY * 1.3, smoothstep(0.88, 1.0, t) * 0.8 * light);

    // Falling into the atmosphere puts more and more air between the camera and
    // the ground, so the view hazes over to a lighter blue on the way down.
    float haze = clamp(log2(u_Zoom) / 4.0, 0.0, 1.0);
    surface = mix(surface, SKY * 0.75, haze * 0.35);

    // And the nearer the cloud tops, the more they read as the brilliant white
    // they are in full sun, rather than the dimmed grey of a distant view.
    surface = mix(surface, FOG, cloudCover * approach * 0.6);

    // ---- composite --------------------------------------------------------
    // fwidth gives the edge a one-pixel blend at any resolution, so the limb
    // does not alias into a staircase.
    float aa   = max(fwidth(t) * 1.5, 1e-5);
    float disc = smoothstep(1.0 + aa, 1.0 - aa, t);

    color = mix(color, surface, disc);

    // ---- landing ----------------------------------------------------------
    // Dropping into the cloud deck. The white-out comes in through wisps of it
    // that swell and slide out past the edges of the screen as the camera
    // falls, and through the banks already in view before the gaps between
    // them, so it billows in rather than washing over evenly.
    float wisps = fbm(vec3(screen * 2.5 / sqrt(u_CloudZoom), 3.7), 4.0);
    float fog   = clamp(u_Fog * 2.2 - 1.2 + 0.5 * cloudCover + 0.6 * wisps, 0.0, 1.0);
    color = mix(color, FOG, fog);

    // Then settle on the page's own background, exactly, so the content
    // section below carries on from the canvas with no visible seam.
    color = mix(color, PAGE, u_Fade);

    out_Col = vec4(color, 1.0);
}
