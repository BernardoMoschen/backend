import { Response, Request } from 'express'
import ProjectServices from '../services/ProjectsServices'

export class ProjectsController {
  static async getAllProjects (
    _request: Request,
    response: Response
  ): Promise<any> {
    return ProjectServices.findAllProjects()
      .then((projectsList: any[]) => {
        return response.status(200).send(projectsList)
      })
      .catch((error: any) => {
        return response
          .status(500)
          .send(`There was an error in the application while trying to retrieve the projects list: ${error.message}`
          )
      })
  }
}
