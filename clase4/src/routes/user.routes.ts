import { Router } from 'express'

const router = Router()

router.route('/').get((_req, res) => {
  return res.json('Users')
})

export { router }
