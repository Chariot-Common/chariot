import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: { enabled: false },
  // the lab homepage became the homepage; there is no separate work index, the work lives on it
  redirects: {
    '/lab/home': '/',
    '/work': '/#work',
  },
  // prepare these up front in dev, so the first visit doesn't stall and reload mid-scroll
  vite: {
    optimizeDeps: { include: ['three', 'lenis'] },
  },
});
