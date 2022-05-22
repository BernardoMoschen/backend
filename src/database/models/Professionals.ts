// DataTypes
import { DataTypes } from 'sequelize'
// Database
import database from '../database'
// Models
import { Allocations } from './Allocations'
import { Feedback } from './Feedback'
import { Phases } from './Phases'
import { Teams } from './Teams'

export const Professionals = database.sequelizeInstance.define(
  'Professionals',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday_date: {
      type: DataTypes.STRING(10),
      allowNull: true
    },  
    admission_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    phase_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: Teams,
      //   key: 'id'
      // }
    },
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // references: {
      //   model: Teams,
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
    tableName: 'meta_league_professionals',
    timestamps: false
  }
  )
  
  
  Professionals.hasOne(Teams, {
    sourceKey: 'team_id',
    foreignKey: 'id',
  }),
  
  Professionals.hasOne(Phases, {
    sourceKey: 'phase_id',
    foreignKey: 'id',
  }),
  
  Professionals.hasMany(Feedback, {
    foreignKey: 'id'
  });
  
  // Professionals.belongsTo(Allocations, {
  //   foreignKey: 'id',
  //   targetKey: 'professional_id'
  // })
