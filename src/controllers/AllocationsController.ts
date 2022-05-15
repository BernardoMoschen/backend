import { Response, Request } from 'express'
import AllocationsServices from '../services/AllocationsServices'

export class AllocationsController {

  static async getAllAllocations (
    request: Request,
    response: Response
  ): Promise<any> {

    return AllocationsServices.findAllAllocations()
      .then((allocationsList: any[]) => {
        return response.status(200).send(allocationsList)
      })
      .catch((error: any) => {
        return response
          .status(500)
          .send(`There was an error in the application while trying to retrieve the allocations list: ${error.message}`
          )
      })
  }


  static async getAllAllocationsByProjectId (
    request: Request,
    response: Response
  ): Promise<any> {
    const { projectId } = request.body

    return AllocationsServices.findAllAllocationsByProjectId(projectId)
      .then((allocationsList: any[]) => {
        return response.status(200).send(allocationsList)
      })
      .catch((error: any) => {
        return response
          .status(500)
          .send(`There was an error in the application while trying to retrieve the allocations list for the project: ${error.message}`
          )
      })
  }
}
