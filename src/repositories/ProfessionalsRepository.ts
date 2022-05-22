// Models
import { Professionals } from '../database/models/Professionals'
import { Phases } from '../database/models/Phases'
import { Teams } from '../database/models/Teams'



export default class ProfessionalsRepository {
  static async retrieveAllProfessionals () {
    try {
      return Professionals.findAll({
        include: professionalsAssociations,
        order: [
          ['name', 'ASC']
        ]
      })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        throw Error(`getAllProfessionals has failed: ${error.message}`)
      }
      console.log('Unexpected error', error)
      return error
    }
  }

}

const professionalsAssociations = [
  {
    model: Phases,
    attributes: ['name']
  },
  {
    model: Teams,
    attributes: ['name']
  }
]