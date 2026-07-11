import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const source = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(publicDir, "logo-source.png");
const output = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.join(publicDir, "logo-bg.png");

function isBlue(r, g, b) {
  return b > r + 15 && b > 55;
}

function isGold(r, g, b) {
  return r > 110 && g > 70 && b < 100 && r > b + 30;
}

function isLogoColor(r, g, b) {
  return isBlue(r, g, b) || isGold(r, g, b);
}

function isWhiteish(r, g, b) {
  if (isLogoColor(r, g, b)) return false;
  return r > 235 && g > 235 && b > 235;
}

const { data, info } = await sharp(source)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const pixels = Buffer.from(data);
const size = width * height;
const exterior = new Uint8Array(size);
const interior = new Uint8Array(size);
const exteriorQueue = [];
const interiorQueue = [];

function canFloodExterior(x, y) {
  const idx = y * width + x;
  const i = idx * 4;
  if (exterior[idx]) return false;
  return isWhiteish(pixels[i], pixels[i + 1], pixels[i + 2]);
}

function tryExteriorSeed(x, y) {
  if (!canFloodExterior(x, y)) return;
  const idx = y * width + x;
  exterior[idx] = 1;
  exteriorQueue.push(idx);
}

for (let x = 0; x < width; x++) {
  tryExteriorSeed(x, 0);
  tryExteriorSeed(x, height - 1);
}

for (let y = 0; y < height; y++) {
  tryExteriorSeed(0, y);
  tryExteriorSeed(width - 1, y);
}

while (exteriorQueue.length > 0) {
  const idx = exteriorQueue.pop();
  const x = idx % width;
  const y = (idx - x) / width;

  for (const [nx, ny] of [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ]) {
    if (!canFloodExterior(nx, ny)) continue;

    const nIdx = ny * width + nx;
    exterior[nIdx] = 1;
    exteriorQueue.push(nIdx);
  }
}

for (let idx = 0; idx < size; idx++) {
  const i = idx * 4;
  if (isLogoColor(pixels[i], pixels[i + 1], pixels[i + 2])) {
    interior[idx] = 1;
    interiorQueue.push(idx);
  }
}

while (interiorQueue.length > 0) {
  const idx = interiorQueue.pop();
  const x = idx % width;
  const y = (idx - x) / width;

  for (const [nx, ny] of [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ]) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;

    const nIdx = ny * width + nx;
    if (interior[nIdx]) continue;

    const i = nIdx * 4;
    if (!isWhiteish(pixels[i], pixels[i + 1], pixels[i + 2])) continue;

    interior[nIdx] = 1;
    interiorQueue.push(nIdx);
  }
}

for (let idx = 0; idx < size; idx++) {
  if (exterior[idx] && !interior[idx]) {
    pixels[idx * 4 + 3] = 0;
  }
}

await sharp(pixels, {
  raw: { width, height, channels: 4 },
})
  .png()
  .toFile(output);

const meta = await sharp(output).metadata();
console.log(
  JSON.stringify({
    source: path.basename(source),
    output: path.basename(output),
    width: meta.width,
    height: meta.height,
    transparentBackground: true,
  })
);
