import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://coherentsystems.institute',
  trailingSlash: 'ignore'
  ,integrations: [
    mdx(),
//   sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
