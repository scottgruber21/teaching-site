import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lessons = defineCollection({
  // Ensure the pattern is simple and the base path is correct
  loader: glob({ pattern: "**/*.md", base: "./src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    teacherInsights: z.array(z.object({
      triggerId: z.string(),
      text: z.string(),
    })),
    evidence: z.array(z.object({
      id: z.string(),
      title: z.string(),
      content: z.string(),
      image: z.string().optional(),
    })),
  }),
});

export const collections = { lessons };