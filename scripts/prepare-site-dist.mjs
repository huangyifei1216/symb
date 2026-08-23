import { access, cp, mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');

await cp(resolve(root, 'app.js'), resolve(dist, 'app.js'));
await cp(resolve(root, 'vendor'), resolve(dist, 'vendor'), { recursive: true });
const illustrationsSource = resolve(root, 'public/illustrations');
const illustrationsDist = resolve(dist, 'illustrations');
const hasIllustrations = await access(illustrationsSource).then(() => true).catch(() => false);
if (hasIllustrations) await cp(illustrationsSource, illustrationsDist, { recursive: true });
await mkdir(resolve(dist, 'server'), { recursive: true });
const cssFiles = (await readdir(resolve(dist, 'assets'))).filter((file) => file.endsWith('.css'));
const files = [
  { path: '/', source: 'index.html', type: 'text/html; charset=utf-8' },
  { path: '/index.html', source: 'index.html', type: 'text/html; charset=utf-8' },
  { path: '/app.js', source: 'app.js', type: 'text/javascript; charset=utf-8' },
  ...cssFiles.map((file) => ({ path: `/assets/${file}`, source: `assets/${file}`, type: 'text/css; charset=utf-8' })),
];
const entries = await Promise.all(files.map(async (file) => [file.path, { body: await readFile(resolve(dist, file.source), 'utf8'), type: file.type }]));
const illustrationFiles = hasIllustrations
  ? (await readdir(illustrationsDist)).filter((file) => /\.(?:jpg|jpeg|png|webp)$/i.test(file))
  : [];
const binaryEntries = await Promise.all(illustrationFiles.map(async (file) => [`/illustrations/${file}`, { base64: (await readFile(resolve(dist, 'illustrations', file))).toString('base64'), type: file.toLowerCase().endsWith('.png') ? 'image/png' : file.toLowerCase().endsWith('.webp') ? 'image/webp' : 'image/jpeg' }]));
await writeFile(resolve(dist, 'server/index.js'), `const files = ${JSON.stringify(Object.fromEntries([...entries, ...binaryEntries]))};\n\nexport default {\n  async fetch(request) {\n    const url = new URL(request.url);\n    const asset = files[url.pathname];\n    if (!asset) return new Response('Not found', { status: 404 });\n    const body = asset.base64 ? Uint8Array.from(atob(asset.base64), (character) => character.charCodeAt(0)) : asset.body;\n    return new Response(request.method === 'HEAD' ? null : body, { headers: { 'content-type': asset.type, 'cache-control': 'public, max-age=300' } });\n  },\n};\n`);
