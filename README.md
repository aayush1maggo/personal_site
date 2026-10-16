# Aayush Maggo – freelance site

Static Astro site for Aayush Maggo (SEO, analytics and AI search, Sydney). Hosted on GitHub Pages. See `CLAUDE.md` for the full brief and `design/homepage-reference.html` for the approved homepage design.

## Local development

Requires Node 22.22+.

```sh
npm install
npm run dev       # http://localhost:4321/
npm run build     # static output in dist/
npm run preview   # serve the built site
```

## Where things live

| What | Where |
| --- | --- |
| Booking URL, Formspree ID, GA4 ID, contact details | `src/config.ts` |
| Services, packages, tools, process steps, skills, budget ranges | `src/data.ts` |
| Case studies (Markdown, Problem → Approach → Result) | `src/content/work/*.md` |
| Design tokens and all styles | `src/styles/global.css` |
| Site URL and base path | `astro.config.mjs` |

Case studies with `draft: true` are built so links work, but they're `noindex` and left out of the sitemap. Set `draft: false` (and add `pubDate`) once the real numbers are in.

## Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which builds with `withastro/action` and publishes with `actions/deploy-pages`.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The site is served at `https://www.aayushmaggo.com/`. The bare domain `aayushmaggo.com` redirects to `www`.

- `SITE` in `astro.config.mjs` and `public/CNAME` must both match the domain set under Settings → Pages.
- DNS is at GoDaddy: four `A` records for `@` pointing to GitHub Pages (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) and a `CNAME` for `www` pointing to `aayush1maggo.github.io`.

## Analytics events

GA4 loads only in production builds, and only once `GA4_ID` is set.

- `cta_click` (with `location`) on any element with `data-cta`
- `book_call_click` on any link with `data-booking`
- `generate_lead` on `/thanks/`

## Placeholder checklist

- [ ] `BOOKING_URL` in `src/config.ts` (Cal.com or Calendly). This also switches on the booking embed on `/contact/`
- [ ] `FORMSPREE_ID` in `src/config.ts`
- [ ] `GA4_ID` in `src/config.ts`
- [ ] `[PRICE]` for each package in `src/data.ts`
- [ ] `[BUDGET RANGE 1–3]` in `src/data.ts`
- [ ] `[YOUR PHOTO]` on the homepage and `/about/` (add the image under `src/assets/` and render with `astro:assets` `<Image>`)
- [ ] Case studies: First 5 Minutes (`[+X%]`, `[TIMEFRAME]`), Angry Chair (`[PRIMARY COMMERCIAL KEYWORDS]`), Centralised SEO reporting (problem/approach detail). Use real, verified figures only
- [ ] Open Graph share image (add `og:image` in `src/layouts/Base.astro`)
