// DataTypes
import { DataTypes } from 'sequelize'
// Database
import database from '../database'
// Models
import { Professionals } from './Professionals'

export const Phases = database.sequelizeInstance.define(
  'Phases',
  
  {
    id: {
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    schema: 'public',
    tableName: 'meta_league_phases',
    timestamps: false
  }
  )
  
  // Phases.belongsTo(Professionals, {
  //   foreignKey: 'id',
  //   targetKey: 'phase_id'
  // })
