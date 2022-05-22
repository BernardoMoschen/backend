// Models
import { Projects } from '../database/models/Projects'
// Interfaces
import { IProject } from '../types/ProjectInterface'

export default class ProjectsRepository {
  static async insertNewProject (projectName: string) {
    try {
      await Projects.create({
          name: projectName
      })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        throw Error(`insertNewProject has failed: ${error.message}`)
      }
      console.log('Unexpected error', error)
      return error
    }
  }

  static async updateProject (projectId: number, projectData: Partial<Pick<IProject, 'name' | 'active'>>) {
    try {
      await Projects.update({
          ...projectData
      },
      {
        where: {
          id: projectId
        }
      })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        throw Error(`updateProject has failed: ${error.message}`)
      }
      console.log('Unexpected error', error)
      return error
    }
  }

  static async deleteProject (projectId: number) {
    try {
      await Projects.update({
          deleted_at: new Date().toDateString()
      },
      {
        where: {
          id: projectId
        }
      })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        throw Error(`deleteProject has failed: ${error.message}`)
      }
      console.log('Unexpected error', error)
      return error
    }
  }
}
 