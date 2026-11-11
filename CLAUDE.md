# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

One-page marketing site for **Dustbunny's LLC**, a house-cleaning business in
Gainesville, FL. Plain static HTML + CSS + vanilla JS, no build step. Deployed by
GitHub Pages from `master` at `https://caiomsi.github.io/dustbunnys-llc/` (no
custom domain).

## Structure

- `index.html` — single page. Sections in order: `#hero`, `#services`, `#why`,
  `#cta-strip`, `#contact`.
- `css/styles.css` — note the plural filename. Design tokens are at the top.
- `js/main.js` — plain DOM code; guard every lookup before use.
- `images/` — descriptive, hyphenated, lowercase filenames.

## Design tokens

Warm cream + forest green with a terracotta accent. Reuse the custom properties,
never hardcode colors:

- Cream `--cream #faf5ed`, `--cream-dark`, `--cream-mid`
- Forest `--forest #1e3a2f`, `--forest-mid`; sage `--sage`, `--sage-light`
- Accent `--terra #c8624a`, `--terra-light`
- Type: `--font-display` Cormorant Garamond, `--font-body` DM Sans

The forest-green palette was restored on purpose after an experiment; keep it.

## Lead flow

Call-to-book only. Every CTA is a `tel:+13528726459` link, shown as
(352) 872-6459. There is no contact form and no backend. If the phone number
changes, update every `tel:` link, the visible number, and the meta description.

## Gaps

No canonical URL, Open Graph tags, JSON-LD, sitemap or CI workflows yet. Add them
(see the root `CLAUDE.md` SEO section) before treating this as launch-ready.
