// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lifemeetsai.com',
  integrations: [mdx(), sitemap({
    filter: (page) => !page.includes('test-'),
  })],

  redirects: {
    '/blog/chatgpt-paint-color-advice/': '/',
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
