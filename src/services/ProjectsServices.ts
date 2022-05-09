const { Projects, Allocations, Professionals, Managers } = require('../models')
import {fn, col} from 'sequelize'

export default class ProjectsService {
  static async findAllProjects (): Promise<any> {
    return Projects.findAll({
      attributes: ['id', 'name', 'active', [fn("COUNT", col("Allocation.id")), "allocations"]],
      include: {
        model: Allocations,
        attributes: []
      },
      group: ['Projects.id', 'Allocation.id']
    })
      .then(async (projectsList: any) => {
        return projectsList
      }).catch((error: any) => {
        throw Error(`findAllProjects has failed: ${error.message}`)
      })
}

static async findProjectSummaryById (projectId: string): Promise<any> {
  return Projects.findOne({
    where: {
      id: projectId 
    },
    include:  projectSummaryAssociations
  })
    .then(async (projectSummary: any) => {
      return projectSummary
    }).catch((error: any) => {
      throw Error(`findProjectSummaryById has failed: ${error.message}`)
    })
}
}


const projectSummaryAssociations = [
  { 
    model: Allocations,
    attributes: ['active'],
    include: [
      {
        model: Professionals,
        attributes: ['name']
      },
      {
        model: Managers,
        attributes: ['name']
      }
    ]
    // as: 'professionals',
    // attributes: ['id', 'name'],
  },
  // { 
  //   model: Managers,
  //   as: 'managers',
  //   // attributes: ['id', 'name'],
  // },
  // { 
  //   model: Project,
  //   as: 'project',
    // attributes: ['id', 'name'],
  // },
]
