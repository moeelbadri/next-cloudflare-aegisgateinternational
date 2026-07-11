import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const source = path.join(publicDir, "business-card-full.png");

const crop = {
  left: 28,
  top: 128,
  width: 285,
  height: 355,
};

const logo = await sharp(source)
  .extract(crop)
  .trim({ threshold: 20 })
  .png()
  .toBuffer();

const trimmedMeta = await sharp(logo).metadata();

await sharp(logo).toFile(path.join(publicDir, "logo.png"));

await sharp(logo)
  .extend({
    top: 12,
    bottom: 12,
    left: 12,
    right: 12,
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .toFile(path.join(publicDir, "logo-bg.png"));

await sharp(logo)
  .resize(32, 32, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile(path.join(publicDir, "favicon.png"));

await sharp(logo)
  .resize(180, 180, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 1 },
  })
  .png()
  .toFile(path.join(publicDir, "apple-touch-icon.png"));

console.log(
  JSON.stringify({
    trimmed: { width: trimmedMeta.width, height: trimmedMeta.height },
  })
);
