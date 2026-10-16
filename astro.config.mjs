// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Deployed to aayush1maggo.github.io/personal_site.
// For a custom domain: set SITE to 'https://[YOUR-DOMAIN]', BASE to '/',
// and add the domain in repo Settings → Pages.
const SITE = 'https://aayush1maggo.github.io';
const BASE = '/personal_site';

// Draft case studies are built (so links work) but kept out of the sitemap and noindexed.
const draftSlugs = readdirSync('./src/content/work')
  .filter((f) => f.endsWith('.md'))
  .filter((f) => /^draft:\s*true\s*$/m.test(readFileSync(`./src/content/work/${f}`, 'utf8')))
  .map((f) => f.replace(/\.md$/, ''));

const excluded = ['/thanks/', '/404/', ...draftSlugs.map((s) => `/work/${s}/`)];

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !excluded.some((path) => page.endsWith(path)),
    }),
  ],
});
