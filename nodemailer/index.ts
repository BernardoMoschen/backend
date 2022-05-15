const nodemailer = require('nodemailer')

const SMPT_CONFIG = require('./nodemailerConfig/smtp')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: SMPT_CONFIG.host,
    port: SMPT_CONFIG.port,
    auth: {
        user: SMPT_CONFIG.user, 
        pass: SMPT_CONFIG.pass, 
    },
    secure: false,
    tls: {
        rejectUnauthorized: false,
    }
})



const startNodemailer = (recipients: string[]) => { 
    transporter.sendMail({
        to: recipients,
        subject: 'Está na hora de você dar o seu feedback!',
        text: 'Ola fulano! Esperamos que esteja tudo bem contigo. Precisamos que voce avalie sua experiencia no projeto atual, por favor, responda o formulario nesse link: https://nodejs.dev/learn/introduction-to-nodejs.',
    })
 }

export default startNodemailer