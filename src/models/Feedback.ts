const {Professionals, Project, Managers} = require('../models')

module.exports = (sequelize: any, DataTypes: any) => {
  const Feedback = sequelize.define(
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
        references: {
          model: Professionals,
          key: 'id'
        }
      },
      project_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Project,
          key: 'id'
        }
      },
      manager_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Managers,
          key: 'id'
        }
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

  return Feedback
}
