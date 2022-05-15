import { Response, Request } from 'express'
import startNodemailer  from '../../nodemailer/index'
import AllocationServices from '../services/AllocationsServices'

export class MailController {

  static async sendFeedbackRequest (
    request: Request,
    response: Response
  ): Promise<any> {
    const { recipientsAllocationIds } =request.body  
        
    await AllocationServices.findAllocationFeedbackEmailsById(recipientsAllocationIds)
        .then(async(data: any) => { 
            await startNodemailer(data)
                .then((res: any) => {
                    return response.status(200).send(`Os emails com requisições de feedback foram enviados com sucesso.`)
                }).catch((error: any) => {
                    return response.status(500).send(`Houve um erro durante o envio de emails: ${error}.`)
                })     
        }).catch((error: Error) => { 
            return response.status(500).send(`Houve um erro durante o envio de emails: ${error}.`)
         })
  }
}
