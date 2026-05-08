import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://newshaylehoutlet.store',
  integrations: [tailwind(), sitemap()],
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
