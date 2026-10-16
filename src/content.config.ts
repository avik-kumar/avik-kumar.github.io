import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { PROJECT_CATEGORIES, PROJECT_STATUSES } from './lib/taxonomy';

type Keys<T> = [keyof T & string, ...(keyof T & string)[]];
const keys = <T extends object>(obj: T) => Object.keys(obj) as Keys<T>;

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        summary: z.string(),
        /** First entry is treated as the primary category. */
        categories: z.array(z.enum(keys(PROJECT_CATEGORIES))).min(1),
        role: z.string(),
        organization: z.string().optional(),
        startDate: z.coerce.date(),
        /** Omit for ongoing work. */
        endDate: z.coerce.date().optional(),
        status: z.enum(keys(PROJECT_STATUSES)),
        technologies: z.array(z.string()).default([]),
        featured: z.boolean().default(false),
        research: z.boolean().default(false),
        /** Shows an "In progress" mark. Independent tools without a public repo. */
        wip: z.boolean().default(false),
        /** Lower numbers sort first. */
        order: z.number().default(100),
        image: image().optional(),
        imageAlt: z.string().optional(),
        links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
        /** Drafts render in `astro dev` but are excluded from production builds. */
        draft: z.boolean().default(false),
      })
      .refine((data) => !data.image || data.imageAlt, {
        message: '`imageAlt` is required when `image` is set.',
        path: ['imageAlt'],
      }),
});

export const collections = { projects };
