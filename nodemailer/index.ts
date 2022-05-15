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

interface IRecipient {
    managerName: string
    professionalName: string
    managerEmail: string
    professionalEmail: string
    projectName: string
}

const managerText = (recipient: IRecipient): string => { 
    const {managerName, professionalName, projectName} = recipient
    return `Olá ${managerName}!
    Precisamos que você avalie o desempenho do profissional ${professionalName} no projeto ${projectName} do Meta League, por favor, responda o formulário deste link: https://nodejs.dev/learn/introduction-to-nodejs.
    `
}

const professionalText = (recipient: IRecipient): string => { 
    const {professionalName, projectName} = recipient
    return `Olá ${professionalName}!
    Precisamos que você avalie a sua experiência no projeto ${projectName} durante o Meta League, por favor, responda o formulário deste link: https://nodejs.dev/learn/introduction-to-nodejs.
    `
}


const startNodemailer = async(recipients: IRecipient[]) => { 

    await Promise.all(recipients.flatMap(async (recipient: IRecipient) => {
        return [
            await transporter.sendMail({
                to: recipient.professionalEmail,
                subject: 'Está na hora de você dar o seu feedback!',
                text: professionalText(recipient).toString()
            }),
            await transporter.sendMail({
                to: recipient.managerEmail,
                subject: 'Está na hora de você dar o seu feedback!',
                text: managerText(recipient).toString()
            })
    ]
    })).then((mailData: any) => {
        const rejectedEmails = mailData.map((mail: any) => {
            if(!!mail.reject) {
                return mail
            }
        })
        if(!rejectedEmails) {
            throw Error(`houveram emails rejeitados: ${rejectedEmails}`)
        }
    }  ).catch((error: Error) => error)
 }

export default startNodemailer