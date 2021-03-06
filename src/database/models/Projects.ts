// DataTypes
import { DataTypes } from 'sequelize'
// Database
import database from '../database'

export const Projects = database.sequelizeInstance.define(
    'Projects',
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
      tableName: 'meta_league_projects',
      timestamps: false
    }
  )



// Projects.hasMany(Feedback, {
//   foreignKey: 'id'
// });
