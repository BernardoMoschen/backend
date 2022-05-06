import { Router } from 'express'
import ProfessionalsRouter from './ProfessionalsRouter'
import ProjectsRouter from './ProjectsRouter'
import AllocationsRouter from './AllocationsRouter'

const Routes = Router()

Routes.use('/professionals', ProfessionalsRouter)
Routes.use('/projects', ProjectsRouter)
Routes.use('/allocations', AllocationsRouter)


Routes.get('/health', (_, res) => res.status(200).send({ success: true }))
Routes.get('*', (_, res) => res.status(404).send('Not Found'))

export default Routes
