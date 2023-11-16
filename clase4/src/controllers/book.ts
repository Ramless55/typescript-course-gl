import type { Response, Request, NextFunction } from 'express'
import { httpResponse } from '#helpers/httpStatus'
import { bookService } from '#services/book'
import type { BodyBookType, IdBookType } from '#types/book'

const getAllBooks = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await bookService.getAll()
    return httpResponse.OK(res, books)
  } catch (error) {
    next(error)
  }
}

const getBook = async (
  req: Request<IdBookType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const book = await bookService.getOne(id)
    if (book === null) {
      return httpResponse.NOT_FOUND(res, 'Book not found')
    }
    return httpResponse.OK(res, book)
  } catch (error) {
    next(error)
  }
}

const createBook = async (
  req: Request<unknown, unknown, BodyBookType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body } = req
    const book = await bookService.create(body)
    return httpResponse.CREATED(res, book)
  } catch (error) {
    next(error)
  }
}

const updateBook = async (
  req: Request<IdBookType, unknown, BodyBookType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { body, params } = req
    const { id } = params
    const book = await bookService.update(id, body)
    return httpResponse.OK(res, book)
  } catch (error) {
    next(error)
  }
}

const deleteBook = async (
  req: Request<IdBookType>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params
    const book = await bookService.delete(id)
    return httpResponse.OK(res, book)
  } catch (error) {
    next(error)
  }
}

export { getAllBooks, getBook, createBook, updateBook, deleteBook }
