import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// The wiki: a committed snapshot of the product's tutorial vault, written by
// scripts/wiki-import.mjs. The build reads only this.
const page = z.object({
  title: z.string(),
  description: z.string(),
  order: z.number(),
  group: z.enum(["start", "organize", "boards", "tools", "server", "rpg"]),
  slug: z.string(),
  twin: z.string(),
  source: z.string(),
  updated: z.string(),
});

export const collections = {
  wikiPt: defineCollection({ loader: glob({ pattern: "*.md", base: "./src/content/wiki/pt" }), schema: page }),
  wikiEn: defineCollection({ loader: glob({ pattern: "*.md", base: "./src/content/wiki/en" }), schema: page }),
};
