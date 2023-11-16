import { Router } from 'express'
import { schemaValidator } from '#middleware/schemaValidator'
import { bodyBookSchema, idBookSchema, updateBookSchema } from '#schemas/book'
import {
  getAllBooks,
  createBook,
  deleteBook,
  getBook,
  updateBook
} from '../controllers/book'

const router = Router()

router
  .route('/')
  .get(getAllBooks)
  .post(schemaValidator(bodyBookSchema), createBook)

router
  .route('/:id')
  .get(schemaValidator(idBookSchema), getBook)
  .put(schemaValidator(updateBookSchema), updateBook)
  .delete(schemaValidator(idBookSchema), deleteBook)

export { router }
