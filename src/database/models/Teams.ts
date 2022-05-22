// DataTypes
import { DataTypes } from 'sequelize'
// Database
import database from '../database'
// Models
import {Professionals} from './Professionals'

export const Teams = database.sequelizeInstance.define(
  'Teams',
  {
    id: {
      field: 'id',
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    schema: 'public',
    tableName: 'meta_league_teams',
    timestamps: false
  }
  )
  
  // Teams.belongsTo(Professionals, {
  //   foreignKey: 'id',
  //   targetKey: 'team_id'
  // })
