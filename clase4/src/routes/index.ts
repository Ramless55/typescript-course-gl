import { Router } from 'express'
import { readdirSync } from 'node:fs'

const PATH_ROUTES = `${__dirname}`

const router = Router()

const cleanFileName = (fileName: string) => {
  return fileName.replace('.ts', '').replace('.routes', '')
}

readdirSync(PATH_ROUTES).forEach((file) => {
  const cleanFile = cleanFileName(file)
  if (cleanFile !== 'index') {
    // el import dinámico es una promesa
    import(`./${cleanFile}.routes`)
      .then((moduleRouter) => {
        router.use(`/${cleanFile}`, moduleRouter.router)
      })
      .catch((err) => {
        console.log(err)
      })
  }
})

export { router }
