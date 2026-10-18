// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Custom domain (set in repo Settings → Pages; public/CNAME matches it).
const SITE = 'https://www.aayushmaggo.com';
const BASE = '/';

// Draft case studies are built (so links work) but kept out of the sitemap and noindexed.
const draftSlugs = readdirSync('./src/content/work')
  .filter((f) => f.endsWith('.md'))
  .filter((f) => /^draft:\s*true\s*$/m.test(readFileSync(`./src/content/work/${f}`, 'utf8')))
  .map((f) => f.replace(/\.md$/, ''));

const excluded = ['/thanks/', '/404/', '/services/', ...draftSlugs.map((s) => `/work/${s}/`)];

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
