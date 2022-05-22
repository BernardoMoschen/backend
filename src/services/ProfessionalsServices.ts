import { Professionals } from "../database/models/Professionals"

export default class ProfessionalsServices {
  static async findAllProfessionals (): Promise<any> {
    return Professionals.findAll({
      where: {
        active: true,
      },
    })
      .then(async (professionalsList: any) => {
        return professionalsList
      })
      .catch((error: any) => {
        throw Error(`findAllProfessionals has failed: ${error.message}`)
      })
  }
}
