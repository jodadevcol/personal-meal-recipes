import { z, defineCollection } from 'astro:content'

const recipesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    ingredients: z.array(
      z.object({
        id: z.number(),
        name: z.string(),
        checked: z.boolean()
      })
    ),
    images: z.array(z.string()),
    cooktime: z.number(),
    portions: z.number(),
    rating: z.number(),
    difficulty: z.string(),
    lastupdate: z.date(),
    recommendations: z.array(
      z.object({
        id: z.number(),
        title: z.string(),
        description: z.string(),
        img: z.string()
      })
    ),
    comments: z.array(
      z.object({
        id: z.number(),
        user: z.string(),
        content: z.string()
      })
    ),
    chefsnotes: z.array(z.object({ id: z.number(), content: z.string() }))
  })
})

export const collections = { recipes: recipesCollection }
