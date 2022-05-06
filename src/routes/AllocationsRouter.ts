import { AllocationsController } from '../controllers/AllocationsController';
import { Router } from 'express'

const AllocationsRouter = Router()

AllocationsRouter.post('/get-by-project-id', AllocationsController.getAllAllocationsByProjectId)

export default AllocationsRouter
