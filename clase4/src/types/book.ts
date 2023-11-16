import type { z } from 'zod'
import type { bodyBookSchema, idBookSchema } from '#schemas/book'

export type BodyBookType = z.infer<typeof bodyBookSchema>['body']
export type IdBookType = z.infer<typeof idBookSchema>['params']
