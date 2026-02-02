import { copyFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtml = path.join(distDir, 'index.html');
const notFoundHtml = path.join(distDir, '404.html');

if (!existsSync(indexHtml)) {
  console.error('Error: dist/index.html not found. Run "npm run build" first.');
  process.exit(1);
}

copyFileSync(indexHtml, notFoundHtml);
console.log('✓ Copied dist/index.html to dist/404.html');
