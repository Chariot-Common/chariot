import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  // the lab homepage became the homepage; there is no separate work index, the work lives on it
  redirects: {
    '/lab/home': '/',
    '/work': '/#work',
  },
});
