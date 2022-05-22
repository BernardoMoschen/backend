import { Response, Request } from 'express'
import ProjectsRepository from '../repositories/ProjectRepository'
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

static async getProjectSummaryById (
  request: Request,
  response: Response
): Promise<any> {
  const {projectId} = request.body
  return ProjectServices.findProjectSummaryById(projectId)
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

static async createNewProject (
  request: Request,
  response: Response
): Promise<any> {
  const { projectName } = request.body
  try {
    await ProjectsRepository.insertNewProject(projectName)
    return response
        .status(200)
        .send(`Project created successfully,` )
  } catch (error) {
    if (error instanceof Error) {
      console.log(error)
      throw Error(`createNewProject has failed: ${error.message}`)
    }
    console.log('Unexpected error', error)
    return error
  }
}

}