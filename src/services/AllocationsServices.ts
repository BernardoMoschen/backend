const { Allocations, Professionals, Managers, Projects, Teams, Phases } = require('../models')
import moment from 'moment'

export default class AllocationsServices {

  static async findAllAllocations (): Promise<any> {
    return Allocations.findAll({
      attributes: ['active', 'created_at', 'updated_at'], 
      include: allocationsAssociations,
    })
      .then(async (allocationsList: any[]) => {
        return allocationsList
        // return allocationsList.flatMap((allocation: any) => { 
        //     return {
        //       professionalName: allocation.Professional.name,
        //       managerName: allocation.Manager.name,
        //       ingressDate: moment(allocation.createdAt).format("DD-MM-YYYY HH:mm:ss"),
        //       departureDate: allocation.active === false ? moment(allocation.updatedAt).format("DD-MM-YYYY HH:mm:ss") : '-',
        //       active: allocation.active
        //     }
        // })
      })
      .catch((error: any) => {
        throw Error(`findAllAllocations has failed: ${error.message}`)
      })
  }

  static async findAllAllocationsByProjectId (projectId: string): Promise<any> {
    return Allocations.findAll({
      where: {
        project_id: projectId,
      },
      attributes: ['active', 'created_at', 'updated_at'], 
      include: allocationsAssociationsByProject,
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
    attributes: ['name',  'email', 'admission_date'],
    include: [
      {
        model: Teams,
        attributes: ['name']
      },
      {
        model: Phases,
        attributes: ['name']
      }
    ]
  },
  {
    model: Managers,
    attributes: ['name']
  },
  {
    model: Projects,
    attributes: ['name']
  },
]

const allocationsAssociationsByProject = [
  {
    model: Professionals,
    attributes: ['name']
  },
  {
    model: Managers,
    attributes: ['name']
  },
]
  