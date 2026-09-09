import { existsSync } from 'node:fs';
import { defineConfig } from 'vite';
import { sites } from '@openai/sites-vite-plugin';

const hasSitesHostingConfig = existsSync(new URL('.openai/hosting.json', import.meta.url));

export default defineConfig({
  plugins: hasSitesHostingConfig ? [sites()] : [],
});
