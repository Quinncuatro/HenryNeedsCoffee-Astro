import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(),
    type: z.string().default('blog'),
    desc: z.string(),
    draft: z.boolean().default(false),
  }),
});

// Define the schema for digital garden posts
const gardenCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.string().default('garden'),
    desc: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Export collections to register them
export const collections = {
  'blog': blogCollection,
  'garden': gardenCollection,
};