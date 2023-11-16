import prisma from '#database/prisma'
import type { BodyBookType } from '#types/book'

export const bookService = {
  getAll: async () => {
    return await prisma.books.findMany()
  },
  getOne: async (id: string) => {
    return await prisma.books.findUnique({
      where: {
        id: Number(id)
      }
    })
  },
  create: async (data: BodyBookType) => {
    return await prisma.books.create({
      data
    })
  },
  update: async (id: string, data: BodyBookType) => {
    return await prisma.books.update({
      where: { id: Number(id) },
      data
    })
  },
  delete: async (id: string) => {
    return await prisma.books.delete({
      where: { id: Number(id) }
    })
  },
  deleteAll: async () => {
    return await prisma.books.deleteMany()
  }
}
