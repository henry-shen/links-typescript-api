import express from 'express'
import morgan from 'morgan'
import apiRouter from './api/routes'
import cors from './middleware/cors'
import authentication from './middleware/authentication'
import { errorHandler } from './middleware/errorHandler'
import createDatabaseConnection from './database/index'

const app = express()
const PORT = 8000

const server = () => {
  app.use(cors)
  app.use(express.json())
  app.use(morgan('dev'))
  app.use(express.static('public'))

  app.use(authentication)
  app.use(apiRouter)
  app.use(errorHandler)

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
  })
}

createDatabaseConnection.then(() => server())
