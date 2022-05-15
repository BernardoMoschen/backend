require('dotenv').config()

module.exports = {
    host: 'smtp.gmail.com',
    port: '587',
    user: process.env.APPLICATION_EMAIL_SENDER_USER,
    pass: process.env.APPLICATION_EMAIL_SENDER_PASSWORD
}