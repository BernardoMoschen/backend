const { Allocations, Professionals, Managers } = require('../models')

export default class AllocationsServices {
  static async findAllAllocationsByProjectId (projectId: string): Promise<any> {
    return Allocations.findAll({
      where: {
        project_id: projectId,
      },
      attributes: ['active', 'created_at', 'updated_at'], 
      include: allocationsAssociations,
    })
      .then(async (allocationsList: any[]) => {
        const activeAllocationsList = allocationsList.map((allocation: any) => { 
          if(allocation.active === true) {
            return {
              professionalName: allocation.Professional.name,
              managerName: allocation.Manager.name,
              ingressDate: allocation.created_at
            }
          }
         })
         const inactiveAllocationsList = allocationsList.map((allocation: any) => { 
          if(allocation.active === false) {
            return {
              professionalName: allocation.Professional.name,
              managerName: allocation.Manager.name,
              ingressDate: allocation.updated_at
            }
          }
         })
         return  {
           activeAllocationsList: activeAllocationsList,
           inactiveAllocationsList: inactiveAllocationsList
          }
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
  