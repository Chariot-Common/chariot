import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per project. The body is the write-up (optional);
// everything the homepage, the dock and the project sheet need lives in frontmatter.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    kind: z.enum(['product', 'web', 'publication', 'brand']),
    disciplines: z.array(z.string()),
    color: z.string(),
    year: z.number().optional(),
    poster: z.string().url(),
    pieces: z.array(z.object({ src: z.string().url(), label: z.string() })).default([]),
    live: z.string().url().optional(),
    featured: z.boolean().default(true),
    // 'sheet' uses the shared project sheet; 'custom' means the project has its own page
    presentation: z.enum(['sheet', 'custom']).default('sheet'),
    // the thinking trail: the question, the routes we explored, the call we made, what it led to
    thinking: z.object({
      question: z.string(),
      directions: z.array(z.object({ label: z.string(), note: z.string(), src: z.string().url().optional(), chosen: z.boolean().default(false) })).length(3),
      call: z.string(),
      result: z.string(),
    }).optional(),
  }),
});

export const collections = { projects };
