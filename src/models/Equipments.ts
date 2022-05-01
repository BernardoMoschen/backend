const { Location, EquipmentType } = require('../models')
module.exports = (sequelize: any, DataTypes: any) => {
  const Equipments = sequelize.define(
    'Equipments',
    {
      id: {
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING(45)
      },
      description: {
        type: DataTypes.STRING(45)
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      order: {
        type: DataTypes.INTEGER
      },
      location_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: Location,
          key: 'id'
        }
      },
      equipment_type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: EquipmentType,
          key: 'id'
        }
      }
    },
    {
      schema: 'dbo',
      tableName: 'tb_luw_equipments',
      timestamps: false
    }
  )

  Equipments.associate = function (models: any) {
    Equipments.hasOne(models.EquipmentType, {
      sourceKey: 'equipment_type_id',
      foreignKey: 'id'
    })

    Equipments.hasOne(models.Location, {
      sourceKey: 'location_id',
      foreignKey: 'id'
    })
  }

  return Equipments
}
