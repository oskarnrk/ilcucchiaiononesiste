import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from "@astrojs/netlify/functions";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.ilcucchiaiononesiste.it',
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: netlify()
});