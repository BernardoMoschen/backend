// const { Professionals, Projects, Managers } = require('../models')

module.exports = (sequelize: any, DataTypes: any) => {
  const Allocations = sequelize.define(
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

  Allocations.associate = function (models: any) {
    Allocations.hasOne(models.Professionals, {
      sourceKey: 'professional_id',
      foreignKey: 'id'
    })

    Allocations.hasOne(models.Projects, {
      sourceKey: 'project_id',
      foreignKey: 'id'
    })

    Allocations.hasOne(models.Managers, {
      sourceKey: 'manager_id',
      foreignKey: 'id'
    })
  }

  return Allocations
}
