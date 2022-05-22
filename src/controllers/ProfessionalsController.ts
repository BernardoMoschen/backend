import { Response, Request } from 'express'
import ProfessionalsServices from '../services/ProfessionalsServices'

export class ProfessionalsController {
  static async getAllProfessionals (
    _request: Request,
    response: Response
  ): Promise<any> {
    try {
      const allProfessionalsList= await ProfessionalsServices.findAllProfessionals()
      return response.status(200).send(allProfessionalsList)
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        return response
          .status(500)
          .send(`There was an error in the application while trying to retrieve the professionals list: ${error.message}`)
      }
      console.log('Unexpected error', error)
      return response
          .status(500)
          .send(`There was unexpected an error in the application while trying to retrieve the professionals list: ${error}`)
    }
  }
}
