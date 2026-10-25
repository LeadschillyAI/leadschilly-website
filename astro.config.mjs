// leadschilly.com marketing site. Static pages, published by Cloudflare Pages on every change to the main branch.
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// Legal pages that are still drafts stay out of the sitemap until their text is final.
const DRAFT_PAGES = ['/terms/', '/terms-international/', '/refund-policy/', '/data-protection/', '/gdpr/', '/tos/']

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
