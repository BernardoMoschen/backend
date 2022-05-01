import { Router } from 'express'
import ProfessionalsRouter from './ProfessionalsRouter'

const Routes = Router()

Routes.use('/professionals', ProfessionalsRouter)

Routes.get('/health', (_, res) => res.status(200).send({ success: true }))
Routes.get('*', (_, res) => res.status(404).send('Not Found'))

export default Routes
