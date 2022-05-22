// DataTypes
import { DataTypes } from 'sequelize'
// Database
import database from '../database'
// Models
import { Professionals } from './Professionals'
import { Projects } from './Projects'
import { Managers } from './Managers'

export const Allocations = database.sequelizeInstance.define(
  'Allocations',
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
      //   model: Projects,
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
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  },
  {
    schema: 'public',
    tableName: 'meta_league_allocations',
    timestamps: false
  }
  )
  
  Allocations.hasOne(Professionals, {
    sourceKey: 'professional_id',
    foreignKey: 'id'
  })
  
  Allocations.hasOne(Projects, {
    sourceKey: 'project_id',
    foreignKey: 'id'
  })
  
  Allocations.hasOne(Managers, {
    sourceKey: 'manager_id',
    foreignKey: 'id'
  })
