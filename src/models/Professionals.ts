// const {Phases, Teams} = require('../models')

module.exports = (sequelize: any, DataTypes: any) => {
  const Professionals = sequelize.define(
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
        //   model: Phases,
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

  Professionals.associate = function (models: any) {
    Professionals.belongsTo(models.Allocations, {
      foreignKey: 'id',
      targetKey: 'professional_id'
    })
  }

  return Professionals
}
