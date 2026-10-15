import { defineConfig } from 'astro/config';
import placeholderGuard from './integrations/placeholder-guard.mjs';

export default defineConfig({
  site: 'https://avik-kumar.github.io',
  compressHTML: true,
  integrations: [placeholderGuard()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
