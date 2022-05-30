// DataTypes
import { DataTypes } from 'sequelize'
// Database
import database from '../database'
// Models
import { Professionals } from './Professionals'
import { Projects } from './Projects'
import { Managers } from './Managers'

export const Feedback = database.sequelizeInstance.define(
  'Feedback',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    allocation_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    schema: 'public',
    tableName: 'meta_league_feedbacks',
    timestamps: false
  }
  )
  
  // Feedback.belongsTo(Managers, {
  //   foreignKey: 'manager_id',
  //   targetKey: 'id'
  // })
  
  // Feedback.belongsTo(Professionals, {
  //   foreignKey: 'professional_id',
  //   targetKey: 'id'
  // })
  
  // Feedback.belongsTo(Projects, {
  //   foreignKey: 'project_id',
  //   targetKey: 'id'
  // })
  
