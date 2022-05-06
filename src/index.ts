import server from './server'
import dotenv from 'dotenv'

dotenv.config()

const port = 8080

server().listen(port)
