import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const source = path.join(publicDir, "business-card-full.png");

function isBlue(r, g, b) {
  return b > r + 15 && b > 55;
}

function isGold(r, g, b) {
  return r > 110 && g > 70 && b < 100 && r > b + 30;
}

function isLogoPixel(r, g, b) {
  return isBlue(r, g, b) || isGold(r, g, b);
}

async function getLogoBounds(imagePath) {
  const { data, info } = await sharp(imagePath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  let left = info.width;
  let right = 0;
  let top = info.height;
  let bottom = 0;

  for (let y = 200; y < 432; y++) {
    for (let x = 60; x < 413; x++) {
      const i = (y * info.width + x) * 3;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];

      if (isLogoPixel(r, g, b)) {
        left = Math.min(left, x);
        right = Math.max(right, x);
        top = Math.min(top, y);
        bottom = Math.max(bottom, y);
      }
    }
  }

  return { left, top, right, bottom };
}

const bounds = await getLogoBounds(source);
const left = bounds.left;
const top = bounds.top;
const width = bounds.right - bounds.left + 1;
const height = bounds.bottom - bounds.top + 1;

const logo = await sharp(source)
  .extract({ left, top, width, height })
  .png()
  .toBuffer();

const meta = await sharp(logo).metadata();

await sharp(logo).toFile(path.join(publicDir, "logo.png"));

import { spawnSync } from "child_process";
spawnSync("node", ["scripts/make-logo-transparent.mjs"], {
  cwd: path.join(__dirname, ".."),
  stdio: "inherit",
});

await sharp(path.join(publicDir, "logo-bg.png"))
  .resize(32, 32, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  })
  .png()
  .toFile(path.join(publicDir, "favicon.png"));

await sharp(path.join(publicDir, "logo-bg.png"))
  .resize(180, 180, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  })
  .png()
  .toFile(path.join(publicDir, "apple-touch-icon.png"));

console.log(
  JSON.stringify({
    bounds,
    trimmed: { width: meta.width, height: meta.height },
  })
);
