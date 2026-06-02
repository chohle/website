// @ts-check
import { defineConfig, sessionDrivers } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Canonical production domain — used for sitemap.xml, canonical URLs and
  // Open Graph / social tags.
  site: 'https://chohle.ch',
  integrations: [sitemap()],
  i18n: {
    locales: ['en', 'de', 'fr', 'it'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // This static site never uses sessions. Pick a non-KV (in-memory) driver so
  // the Cloudflare adapter doesn't auto-require a "SESSION" KV namespace — that
  // avoids committing an account-specific namespace id to a public repo.
  session: {
    driver: sessionDrivers.memory(),
  },

  adapter: cloudflare()
});