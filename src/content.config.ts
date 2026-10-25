// Blog posts are Markdown files in src/content/blog/. The blog automation (Make.com) adds one file per post.
// Required: title, description, pubDate. FAQs become a visible FAQ section and FAQ labels for Google and AI search.
import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(110),
    description: z.string().max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Team Leadschilly'),
    tags: z.array(z.string()).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
})

export const collections = { blog }
