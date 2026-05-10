import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name_en: z.string(),
    name_ar: z.string(),
    description_en: z.string().optional(),
    description_ar: z.string().optional(),
    category: z.enum(['suits', 'blazers', 'shirts', 'pants', 'sweaters', 'ties']),
    price: z.string().optional(),
    images: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    in_stock: z.boolean().default(true),
    order: z.number().default(0),
  }),
});

export const collections = { products };
