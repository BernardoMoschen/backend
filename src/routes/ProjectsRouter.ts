import { ProjectsController } from './../controllers/ProjectsController';
import { Router } from 'express'

const ProjectsRouter = Router()

ProjectsRouter.get('/get-all', ProjectsController.getAllProjects)
ProjectsRouter.get('/summary-by-id', ProjectsController.getProjectSummaryById)

export default ProjectsRouter
