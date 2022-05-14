const { Allocations, Professionals, Managers, Projects } = require('../models')
import moment from 'moment'

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
        return allocationsList.flatMap((allocation: any) => { 
            return {
              professionalName: allocation.Professional.name,
              managerName: allocation.Manager.name,
              ingressDate: moment(allocation.createdAt).format("DD-MM-YYYY HH:mm:ss"),
              departureDate: allocation.active === false ? moment(allocation.updatedAt).format("DD-MM-YYYY HH:mm:ss") : '-',
              active: allocation.active
            }
        })
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
        },
  ]
  