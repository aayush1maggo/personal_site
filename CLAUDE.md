# Aayush Maggo – Freelance Website

Personal freelance site for Aayush Maggo, a Sydney-based AI search (GEO/AEO) and SEO specialist. Position as AI search + SEO first; analytics and reporting are supporting proof, not a separate service line (decided Oct 2026 from AU search-volume research). The site's job is to get the right client to book a call or send an enquiry.

## Hosting: GitHub Pages (static only)

- The site is hosted on **GitHub Pages**. There is no server, database or backend. Everything must build to static HTML/CSS/JS.
- Use **Astro** (static output) unless told otherwise. Deploy with the official GitHub Actions workflow for Astro → Pages (`.github/workflows/deploy.yml` using `withastro/action` and `actions/deploy-pages`).
- Set `site` in `astro.config.mjs` to the final URL. If deploying to `username.github.io/repo-name` instead of a custom domain, also set `base: '/repo-name'` and make sure all internal links and assets respect it.
- Custom domain: add `public/CNAME` containing the domain (placeholder: `[YOUR-DOMAIN]`). Enforce HTTPS in repo settings.
- Add `public/.nojekyll` so GitHub doesn't run Jekyll on the output.
- No server-side features: forms, booking and analytics use third-party services (below).

## Design source

- `design/homepage-reference.html` is the approved homepage design. Open it in a browser to see it. Match it closely: layout, spacing, colours, type and copy.
- Convert its inline styles into a proper stylesheet with CSS custom properties. Don't keep inline styles.
- Design tokens:
  - Ground `#F3F4EF`, alt ground `#ECEEE8`, white cards `#FFFFFF`
  - Ink `#101915`, muted text `#4A5550`, borders `#D9DCD4`
  - Dark sections `#101915`, dark cards `#16221D`, dark borders `#2E3B35`, dark muted text `#C3CBC6`
  - Accent `#D9480F` (use only for markers, numbers and large text; small body text stays ink for contrast)
  - Fonts: Bricolage Grotesque (display), IBM Plex Sans (body), IBM Plex Mono (labels). Self-host via `@fontsource` packages instead of the Google Fonts link, for speed and privacy.
  - Radii: 16px cards, 20px large panels, pill buttons
- Keep it responsive: everything must stack cleanly at 375px wide.

## Site structure

1. `/`: homepage (as per design)
2. `/services`: one section per service, with packages and `[PRICE]` placeholders
3. `/work`: case study index, plus `/work/[slug]` pages from an Astro content collection (Markdown). Structure: Problem → Approach → Result, with headline metric.
4. `/tools`: the "Lab" (rank tracker, AEO monitor, AI research agents)
5. `/about`
6. `/contact`: the form, plus booking embed
7. `/thanks`: post-submission page
8. `404.html`

Case-study entries to create as drafts: First 5 Minutes, Angry Chair, Centralised SEO reporting. Leave bracketed placeholders like `[+X%]` and `[TIMEFRAME]`. **Never invent metrics, testimonials or client results.**

## Forms (static-site compatible)

- Use **Formspree**: `<form action="https://formspree.io/f/[FORM_ID]" method="POST">`.
- Fields: name, **email (required, missing from the design: add it)**, website, goal (select), budget (select), message (textarea). Every input needs a `name` attribute and a `<label>`.
- Add a honeypot field `_gotcha` (hidden) for spam.
- Redirect to `/thanks` after submit (`_next` hidden field, or Formspree's AJAX submit with a success state).
- "Book a call" buttons link to `[CAL.COM OR CALENDLY URL]`.

## Analytics and SEO (this site is part of the portfolio, so do it properly)

- GA4 via `gtag.js` with measurement ID placeholder `[GA4_ID]`, loaded only in production builds.
- Events: `generate_lead` on `/thanks`, `book_call_click` on booking links, `cta_click` with a `location` parameter on main CTAs.
- Per-page `<title>`, meta description, canonical, Open Graph and Twitter tags.
- JSON-LD: `Person` and `ProfessionalService` on the homepage; `Article` on case studies.
- Generate `sitemap.xml` (`@astrojs/sitemap`) and `robots.txt`.
- Target Lighthouse 95+ on all four categories. Optimise images with `astro:assets`.

## Content rules

- Australian English (optimise, colour, organisation).
- Contact details shown: email `ayush.maggo@gmail.com` and LinkedIn `linkedin.com/in/aayushmaggo` only. **Do not show a phone number.**
- Brand names KFC, Toyota, HESTA and Fonterra must always appear as "via AKQA & R/GA". They were agency clients, not Aayush's direct clients.
- Photo is a placeholder (`[YOUR PHOTO]`) until supplied.

## Working conventions

- Commit in small, logical steps with clear messages.
- Before finishing a task, run `npm run build` and fix any errors.
- Keep a short README with: local dev commands, how deployment works, and a checklist of remaining placeholders.
