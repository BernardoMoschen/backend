import { MailController } from '../controllers/MailController'

import { Router } from 'express'

const MailRouter = Router()

MailRouter.post('/send-request', MailController.sendFeedbackRequest)

export default MailRouter
