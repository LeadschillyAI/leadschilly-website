# leadschilly.com

The Leadschilly marketing site: homepage, pricing, blog and legal pages. Static pages built with Astro and
published by Cloudflare Pages. Every change merged to `main` goes live in about a minute. No uploads, no WordPress.

## For Deepanshu

- **See a change before it's live:** every change Claude proposes gets its own preview link from Cloudflare.
- **Approve a blog post:** in the Google Sheet "Leadschilly Blog Queue", set the post's Status to "Approved".
  The publish automation adds it to this site, and it's live within a few minutes.
- Nothing here touches the app (my.leadschilly.com) or the old platform (app.leadschilly.com).

## How it's organised

| What | Where |
|---|---|
| Links, phone, address, menus | `src/config.ts` |
| Homepage / pricing | `src/pages/index.astro`, `src/pages/pricing.astro` |
| Blog posts (one Markdown file each) | `src/content/blog/` |
| Legal text | `src/legal/` and `src/pages/*.astro` |
| Colours and layout | `src/styles/global.css` (Leadschilly design system colours) |
| Old WordPress addresses → new pages | `public/_redirects` |
| Images, icons | `public/` |

## Blog post format

```markdown
---
title: "Under 110 characters"
description: "Under 170 characters, shown on Google"
pubDate: 2026-10-25
tags: ["lead response"]
faqs:
  - q: "Question buyers or brokers ask"
    a: "Short, direct answer."
draft: false
---
Post body in Markdown. Use ## for sections.
```

Every post gets its FAQ section, FAQ and article labels for Google and AI search, and a sitemap entry automatically.
A post with `draft: true` is not published.

## Must stay as they are

- `/privacy-policy-2/` and `/data-deletion/`: Meta's app settings use these addresses (see the app repo's `docs/connect-meta.md`).
- `/tos/` and `/refund-policy/`: customers of the earlier platform agreed to these.

## Before switching leadschilly.com to this site

See the launch checklist in the pull request / handover notes: legal texts, demo booking link, chat widget, USD prices.

## Commands

```bash
npm install
npm run dev       # local preview at http://localhost:4321
npm run build     # builds into dist/
```

Cloudflare Pages settings: build command `npm run build`, output folder `dist`, Node 22.
