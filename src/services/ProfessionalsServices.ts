// Libs
import moment from 'moment'
// Repositories
import ProfessionalsRepository from "../repositories/ProfessionalsRepository"

export default class ProfessionalsServices {
  static async findAllProfessionals (): Promise<any> {
    try {
      const professionalsList = await ProfessionalsRepository.retrieveAllProfessionals()
      return professionalsList.map((professional: any) => { 
        return {
          id: professional.id,
          name: professional.name,
          email: professional.email,
          birthdayDate: moment(professional.birthday_date).utc().format('DD/MM/YYYY'),
          admissionDate: moment(professional.admission_date).utc().format('DD/MM/YYYY'),
          phase: professional.Phase.name,
          team: professional.Team.name,
        }
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
