import express, { Request, Response } from 'express'
import http from 'http'
import Routes from './routes/Routes'

const app = () => {
  const app = express()


  app.use((_: Request, res: Response, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Credentials, Set-Cookie'
    )
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Expose-Headers', [
      'Authorization',
      'Content-Disposition'
    ])
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, Accept, Access-Control-Allow-Credentials, Cross-Origin'
    )
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    )
    res.header('Access-Control-Allow-Origin', process.env.FRONTEND_ORIGIN)
    next()
  })

  app.use(express.json())

  app.use(Routes)

  const server = http.createServer(app)

  server.on('listening', () => {
    console.info(`Server listening on port ${process.env.PORT}...`)
  })

  return server
}

export default app
