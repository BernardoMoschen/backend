const { Allocations, Professionals, Managers } = require('../models')

export default class AllocationsServices {
  static async findAllAllocationsByProjectId (projectId: string): Promise<any> {
    return Allocations.findAll({
      where: {
        project_id: projectId,
      },
      attributes: ['active', 'created_at', 'updated_at'], 
      include: allocationsAssociations
    })
      .then(async (allocationsList: any) => {
        return allocationsList
      })
      .catch((error: any) => {
        throw Error(`findAllAllocationsByProjectId has failed: ${error.message}`)
      })
  }
}

const allocationsAssociations = [

        {
          model: Professionals,
          attributes: ['name']
        },
        {
          model: Managers,
          attributes: ['name']
        }

  ]
  