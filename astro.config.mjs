// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // No production domain yet — set `site` once one exists.
  vite: {
    plugins: [tailwindcss()],
  },
});
