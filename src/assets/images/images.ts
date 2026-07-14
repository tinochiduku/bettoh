// Static image imports.
// Because the site is exported statically, every image is imported directly
// so Next/Webpack can fingerprint + bundle it at build time (no runtime
// fetching, no remote loader needed).
//
// Drop this folder (assets/images) anywhere convenient in your shell — src/,
// or app/ — and adjust the relative paths below if you move it.

import iconColor from "./icon-color.png";
import iconWhite from "./icon-white.png";
import pylonSign from "./pylon-sign.jpg";

export const images = {
  /** Full-colour "B" bolt mark — use on light/white backgrounds. */
  iconColor,
  /** White + red mark — use on dark backgrounds (footer, dark hero panels). */
  iconWhite,
  /** Real fabricated + installed pylon signage — our one piece of proof-of-work photography. */
  pylonSign,
};

export type ImageKey = keyof typeof images;
