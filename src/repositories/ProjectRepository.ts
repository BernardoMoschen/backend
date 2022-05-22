// Models
import { Projects } from '../database/models/Projects'

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
}
