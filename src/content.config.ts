import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    metric: z.string(),
    metricLabel: z.string(),
    summary: z.string(),
    order: z.number().default(99),
    pubDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
