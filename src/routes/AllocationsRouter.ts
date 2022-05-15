import { AllocationsController } from '../controllers/AllocationsController';
import { Router } from 'express'

const AllocationsRouter = Router()

AllocationsRouter.get('/get-all', AllocationsController.getAllAllocations)
AllocationsRouter.post('/get-by-project-id', AllocationsController.getAllAllocationsByProjectId)

export default AllocationsRouter
