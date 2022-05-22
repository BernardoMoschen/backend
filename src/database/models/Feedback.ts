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
    professional_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: Professionals,
      //   key: 'id'
      // }
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: Project,
      //   key: 'id'
      // }
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: Managers,
      //   key: 'id'
      // }
    },
    copy_to: {
      type: DataTypes.TEXT,
      allowNull: true,
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
  
