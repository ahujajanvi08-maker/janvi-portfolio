import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";
import toIco from "to-ico";

const BG = "#111111";
const publicDir = join(process.cwd(), "public");

function faviconSvg(size) {
  const fontSize = Math.round(size * 0.44);
  const y = Math.round(size * 0.68);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${BG}"/>
  <text
    x="50%"
    y="${y}"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="${fontSize}"
    font-weight="700"
    fill="#ffffff"
    text-anchor="middle"
  >JA</text>
</svg>`;
}

async function renderPng(size) {
  return sharp(Buffer.from(faviconSvg(size))).png().toBuffer();
}

const png16 = await renderPng(16);
const png32 = await renderPng(32);
const png180 = await renderPng(180);

await writeFile(join(publicDir, "favicon.png"), png32);
await writeFile(join(publicDir, "favicon-16x16.png"), png16);
await writeFile(join(publicDir, "favicon-32x32.png"), png32);
await writeFile(join(publicDir, "apple-touch-icon.png"), png180);
await writeFile(join(publicDir, "favicon.ico"), await toIco([png16, png32]));

console.log("Generated favicon assets in /public");
