// Libs
import { Op, QueryTypes } from 'sequelize'
import moment from 'moment'
// Database
import database from '../database/database'
// Models
import { Equipments } from '../database/models/Equipments'
import { Plan } from '../database/models/Plan'
import { IEquipments } from '../types/EquipmentsInterface'

export default class ProfessionalsRepository {
  static async retrieveAllEquipments () {
    try {
      return Equipments.findAll({
        where: {
          deleted_at: {
            [Op.eq]: null
          }
        },
        attributes: ['id', 'name', 'active']
      })
    } catch (error) {
      if (error instanceof Error) {
        console.log(error)
        throw Error(`getAllEquipments has failed: ${error.message}`)
      }
      console.log('Unexpected error', error)
      return error
    }
  }

}
