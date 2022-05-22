// DataTypes
import { DataTypes } from 'sequelize'
// Database
import database from '../database'

export const FeedbackSettings = database.sequelizeInstance.define(
    'FeedbackSettings',
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      milliseconds_interval: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,
      },
    },
    {
      schema: 'public',
      tableName: 'meta_league_feedback_settings',
      timestamps: false
    }
  )
