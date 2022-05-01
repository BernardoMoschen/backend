import { Response, Request } from 'express'
import ProfessionalsServices from '../services/ProfessionalsServices'

export class ProfessionalsController {
  static async getAllProfessionals (
    _request: Request,
    response: Response
  ): Promise<any> {
    return ProfessionalsServices.findAllProfessionals()
      .then((professionalsList: any[]) => {
        return response.status(200).send(professionalsList)
      })
      .catch((error: any) => {
        return response
          .status(500)
          .send(`There was an error in the application while trying to retrieve the professionals list: ${error.message}`
          )
      })
  }
}
