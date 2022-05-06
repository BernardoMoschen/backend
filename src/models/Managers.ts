module.exports = (sequelize: any, DataTypes: any) => {
  const Managers = sequelize.define(
    'Managers',
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
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
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
      tableName: 'meta_league_managers',
      timestamps: false
    }
  )

  Managers.associate = function (models: any) {
    Managers.belongsTo(models.Allocations, {
      foreignKey: 'id',
      targetKey: 'manager_id'
    })
  }

  return Managers
}
