import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://www.ilcucchiaiononesiste.it",
  i18n: {
    defaultLocale: "it-it",
    locales: ["it-it"],
  },
  integrations: [
    mdx(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap()
  ],
});
