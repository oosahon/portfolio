import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const article = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.{md,mdx}" }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      slug: z.string(),
      readTime: z.number().optional(),
      updatedDate: z.coerce.date().optional(),
      external: z.boolean().optional(),
    }),
});
export const collections = { article };
