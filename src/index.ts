import dotenv from 'dotenv'
import server from './server'

dotenv.config()

const port = process.env.SERVER_PORT || 8080

server().listen(port)
