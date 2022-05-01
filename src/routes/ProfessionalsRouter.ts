import { Router } from 'express'
import { ProfessionalsController } from '../controllers/ProfessionalsController'

const ProfessionalsRouter = Router()

ProfessionalsRouter.get('/', ProfessionalsController.getAllProfessionals)


export default ProfessionalsRouter
