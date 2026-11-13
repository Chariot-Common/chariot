import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One markdown file per project. Everything the homepage, the dock and the case page need lives in
// frontmatter. The case page (src/pages/work/[slug].astro) is built from it, after dmcg's Groth page:
// a big wordmark, then a readable column of text alternating with big media.
//
// Copy rule: only Chariot's own words, from the case studies on withchariot.com. Projects without a
// case study leave `overview`/`story` out, and the page says "write-up to come".

// a picture or a clip; src can be a full URL or a path under /public
const media = z.object({
  src: z.string(),
  alt: z.string().default(''),
  // how it sits: across the page, or as a phone (narrow)
  shape: z.enum(['wide', 'phone', 'square']).default('wide'),
});

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
    // screens we hold locally (public/media/...), shown when there is no write-up
    screens: z.array(media).default([]),
    live: z.string().url().optional(),
    featured: z.boolean().default(true),
    // kept for the dock and older pages; every project now uses the shared case page
    presentation: z.enum(['sheet', 'custom']).default('sheet'),

    // ---- the case study (all optional) ----
    tagline: z.string().optional(),
    overview: z.array(z.string()).default([]),
    // the big picture or clip right after the overview
    lead: z.array(media).default([]),
    services: z.array(z.string()).default([]),
    story: z.array(z.object({
      heading: z.string().optional(),
      kicker: z.string().optional(),
      text: z.array(z.string()).default([]),
      // short titled notes inside a section, e.g. "Threaded iterations"
      notes: z.array(z.object({ head: z.string(), body: z.string() })).default([]),
      media: z.array(media).default([]),
    })).default([]),
    impact: z.array(z.object({ head: z.string(), body: z.string() })).default([]),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    quote: z.object({
      title: z.string().optional(),
      text: z.array(z.string()),
      by: z.string(),
      role: z.string(),
    }).optional(),
    team: z.array(z.object({ name: z.string(), role: z.string() })).default([]),
    links: z.array(z.object({ label: z.string(), href: z.string().url() })).default([]),

    // the thinking trail; only with real directions from the team
    thinking: z.object({
      question: z.string(),
      directions: z.array(z.object({ label: z.string(), note: z.string(), src: z.string().url().optional(), chosen: z.boolean().default(false) })).length(3),
      call: z.string(),
      result: z.string(),
    }).optional(),
  }),
});

export const collections = { projects };
