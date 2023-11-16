import { z } from 'zod'

export const bodyBookSchema = z.object({
  body: z.object({
    title: z.string().min(1).max(255),
    author: z.string().min(1).max(255),
    genre: z.string().array().nonempty(),
    stock: z.number().int().nonnegative()
  })
})

export const idBookSchema = z.object({
  params: z.object({
    id: z.string().regex(/^[0-9]+$/, 'Id must be a number')
  })
})

export const updateBookSchema = z.object({
  body: bodyBookSchema.shape.body,
  params: idBookSchema.shape.params
})
