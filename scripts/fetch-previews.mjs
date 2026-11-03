// Downloads site screenshots into static/previews (resized to 1280px, WebP) so the site never depends on a live third-party API.
// Requires `cwebp` (brew install webp).
// Usage: npm run previews [slug ...]   (no slugs = refresh all)
import { writeFile, mkdir, unlink } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';

const sites = {
  pulse: 'https://5of12.github.io/Pulse/',
  augment: 'https://5of12.github.io/Augment/',
  pocketoperations: 'https://5of12.github.io/PocketOperations/',
  'midiweb-hub': 'https://5of12.github.io/MIDIWeb-Hub/',
  '5of12': 'https://5of12.co.uk/',
  foundry: 'https://www.foundry.com/',
  'pervasive-media-studio': 'https://www.watershed.co.uk/studio/'
};

const wanted = process.argv.slice(2);
const slugs = wanted.length ? wanted : Object.keys(sites);
await mkdir('static/previews', { recursive: true });

let failed = 0;
for (const slug of slugs) {
  const api = `https://api.microlink.io/?url=${encodeURIComponent(sites[slug])}&screenshot=true&meta=false&embed=screenshot.url`;
  try {
    const res = await fetch(api, { redirect: 'follow' });
    const type = res.headers.get('content-type') ?? '';
    if (!res.ok || !type.startsWith('image/')) throw new Error(`${res.status} ${type}`);
    const tmp = `static/previews/${slug}.tmp`;
    await writeFile(tmp, Buffer.from(await res.arrayBuffer()));
    try {
      execFileSync('cwebp', ['-quiet', '-q', '80', '-resize', '1280', '0', tmp, '-o', `static/previews/${slug}.webp`]);
    } finally {
      await unlink(tmp);
    }
    console.log(`ok   ${slug}.webp`);
  } catch (e) {
    failed++;
    console.error(`FAIL ${slug}: ${e.message}`);
  }
}
process.exit(failed ? 1 : 0);
