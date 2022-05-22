// Libs
import { Op, QueryTypes } from 'sequelize'
import moment from 'moment'
// Database
import database from '../database/database'
// Models
import { Professionals } from '../database/models/Professionals'


export default class ProfessionalsRepository {
  static async retrieveAllProfessionals () {
    try {
      return Professionals.findAll({})
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
