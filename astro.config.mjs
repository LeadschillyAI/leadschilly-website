// leadschilly.com marketing site. Static pages, published by Cloudflare (Workers) on every change to the main branch.
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Pages listed here stay out of the sitemap (none at the moment).
const DRAFT_PAGES = []

export default defineConfig({
  site: 'https://leadschilly.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !DRAFT_PAGES.some((p) => page.endsWith(p)),
    }),
  ],
})
