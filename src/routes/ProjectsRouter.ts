import { ProjectsController } from './../controllers/ProjectsController';
import { Router } from 'express'

const ProjectsRouter = Router()

ProjectsRouter.get('/get-all', ProjectsController.getAllProjects)

export default ProjectsRouter
