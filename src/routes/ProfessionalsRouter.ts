import { Router } from 'express'
import { ProfessionalsController } from '../controllers/ProfessionalsController'

const ProfessionalsRouter = Router()

ProfessionalsRouter.get('/get-all', ProfessionalsController.getAllProfessionals)


export default ProfessionalsRouter
