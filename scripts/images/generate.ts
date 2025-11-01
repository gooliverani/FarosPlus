import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SOURCE_DIR = path.resolve(__dirname, '../../assets/images-src');
const TARGET_DIR = path.resolve(__dirname, '../../public/images');
const TARGET_FORMATS = ['avif', 'webp'] as const;

async function ensureDir(dir: string) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function transformImage(filePath: string) {
  const relative = path.relative(SOURCE_DIR, filePath);
  const extless = relative.replace(path.extname(relative), '');
  const outputDir = path.join(TARGET_DIR, path.dirname(extless));

  await ensureDir(outputDir);

  const image = sharp(filePath);

  await Promise.all(
    TARGET_FORMATS.map(async (format) => {
      const outputPath = path.join(outputDir, `${path.basename(extless)}.${format}`);
      await image.clone()[format]({ quality: 70 }).toFile(outputPath);
    })
  );

  const jpegPath = path.join(outputDir, `${path.basename(extless)}.jpg`);
  await image.clone().jpeg({ quality: 82 }).toFile(jpegPath);

  const stats = await image.metadata();
  const placeholderPath = path.join(outputDir, `${path.basename(extless)}.placeholder.txt`);
  if (stats.width && stats.height && stats.width * stats.height <= 1_000_000) {
    const blurDataUrl = await image
      .resize({ width: 24 })
      .toBuffer({ resolveWithObject: false })
      .then((buffer) => `data:image/jpeg;base64,${buffer.toString('base64')}`);
    await fs.promises.writeFile(placeholderPath, blurDataUrl, 'utf8');
  }
}

async function gatherImages(dir: string): Promise<string[]> {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const tasks = await Promise.all(
    entries.map((entry: fs.Dirent) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return gatherImages(fullPath);
      }
      if (/\.(png|jpe?g)$/i.test(entry.name)) {
        return Promise.resolve([fullPath]);
      }
      return Promise.resolve<string[]>([]);
    })
  );
  return tasks.flat();
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.warn(`No source directory found at ${SOURCE_DIR}. Skipping image generation.`);
    return;
  }

  await ensureDir(TARGET_DIR);
  const images = await gatherImages(SOURCE_DIR);

  if (images.length === 0) {
    console.warn('No source images discovered—nothing to process.');
    return;
  }

  await Promise.all(images.map(transformImage));
  console.info(`Processed ${images.length} source image(s) into AVIF/WebP/JPEG variants.`);
}

main().catch((error) => {
  console.error('Image generation failed:', error);
  process.exitCode = 1;
});
