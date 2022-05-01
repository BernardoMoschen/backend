import { Router } from 'express'

const Routes = Router()

Routes.get('/health', (_, res) => res.status(200).send({ success: true }))

Routes.get('*', (_, res) => res.status(404).send('Not Found'))

export default Routes
