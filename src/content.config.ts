import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.string(),
    tags: z.array(z.string()),
    readingTime: z.number(),
    image: z.string().optional(),
  }),
});

export const collections = { articles };
