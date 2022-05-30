import {Allocations} from '../database/models/Allocations'
import {Professionals} from '../database/models/Professionals'
import {Managers} from '../database/models/Managers'
import {Projects} from '../database/models/Projects'
import {Teams} from '../database/models/Teams'
import {Phases} from '../database/models/Phases'
import {Feedback} from '../database/models/Feedback'

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
          ingressDate: moment(allocation.createdAt).format("DD/MM/YYYY"),
          departureDate: allocation.active === false ? moment(allocation.updatedAt).format("DD/MM/YYYY") : '-',
          active: allocation.active
        }
      })
    })
    .catch((error: any) => {
      throw Error(`findAllAllocationsByProjectId has failed: ${error.message}`)
    })
  }
  
  static async findAllocationFeedbackEmailsById (recipientsAllocationIds: number[]): Promise<any> {
    return Allocations.findAll({
      where: {
        id: recipientsAllocationIds,
      },
      attributes: [], 
      include: allocationsAssociationsForEmail,
    })
    .then((data: any[]) => {
      return data.map((allocation: any) => { 
        return {
          professionalName: allocation.Professional.name,
          professionalEmail: allocation.Professional.email,
          projectName: allocation.Project.name,
          managerName: allocation.Manager.name,
          managerEmail: allocation.Manager.email
        }
      })
    })
    .catch((error: any) => {
      throw Error(`findAllocationFeedbackEmailsById has failed: ${error.message}`)
    })
  }
  
}

const allocationsAssociations = [
  {
    model: Professionals,
    attributes: ['name',  'email'],
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
    attributes: ['name', 'email']
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

const allocationsAssociationsForEmail = [
  {
    model: Professionals,
    attributes: ['name', 'email']
  },
  {
    model: Managers,
    attributes: ['name','email']
  },
  {
    model: Projects,
    attributes: ['name']
  },
]

