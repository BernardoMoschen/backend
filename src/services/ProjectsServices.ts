const { Projects } = require('../models')

export default class ProjectsService {
  static async findAllProjects (): Promise<any> {
    return Projects.findAll({
      attributes: ['id', 'name', 'active']
    })
      .then(async (projectsList: any) => {
        return projectsList
      }).catch((error: any) => {
        throw Error(`findAllProjects has failed: ${error.message}`)
      })
}
}
