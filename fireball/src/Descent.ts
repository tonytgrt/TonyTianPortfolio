// The landing that plays as the visitor scrolls through the hero: the camera
// pans down to look straight at the planet, falls toward it, drops through the
// cloud deck, and comes out inside the clouds the content page sits in.
// `progress` runs from 0 at the top of the page to 1 where the hero hands over
// to the content.
//
//   0.00 - 0.40  pan down and a little right until the planet's centre is mid-screen
//   0.30 - 0.92  fall: the ground zooms in, and the nearer cloud deck faster still
//   0.70 - 0.90  white-out, dropping into the clouds
//   0.86 - 0.96  come out among them, in the scene behind the content
//
// The last stretch is inside the clouds alone, so the smoothing in main.ts has
// caught up before the content arrives.

// Height of the cloud deck and the lowest the camera gets, both as fractions of
// the altitude it starts from. Each layer's magnification is the starting
// altitude over its current distance from the camera, so as the camera nears
// the deck the clouds balloon while the ground far below grows only steadily.
const CLOUD_DECK = 0.03;
const LOWEST = 0.034;

export interface DescentView {
  pan: number;        // 0 to 1, toward looking straight at the planet's centre
  zoom: number;       // magnification of the ground
  cloudZoom: number;  // magnification of the cloud deck
  fog: number;        // 0 to 1
  inside: number;     // 0 to 1, from the landing to the clouds behind the content
  comet: number;      // brightness of the comet, which belongs to space and fades
                      // out before the fall
}

// Where `x` is between `a` and `b`, as 0 to 1.
function span(x: number, a: number, b: number) {
  return Math.min(1, Math.max(0, (x - a) / (b - a)));
}

// Eased in and out, so no stage starts or stops with a jolt.
function ease(x: number) {
  return x * x * (3 - 2 * x);
}

export function descentView(progress: number): DescentView {
  // The altitude falls geometrically, so the magnification multiplies at an
  // even rate rather than lurching at the end.
  const altitude = Math.pow(LOWEST, ease(span(progress, 0.30, 0.92)));

  return {
    pan: ease(span(progress, 0.0, 0.40)),
    zoom: 1 / altitude,
    cloudZoom: (1 - CLOUD_DECK) / (altitude - CLOUD_DECK),
    fog: ease(span(progress, 0.70, 0.90)),
    inside: ease(span(progress, 0.86, 0.96)),
    comet: 1 - ease(span(progress, 0.20, 0.35)),
  };
}
