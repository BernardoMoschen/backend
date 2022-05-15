import dotenv from 'dotenv'
import server from './server'
import startNodeMailer from '../nodemailer/index'

dotenv.config()

const port = process.env.SERVER_PORT || 8080

// startNodeMailer(['bernardomoschen.dev@gmail.com', 'metaleague.123@gmail.com'])
server().listen(port)
