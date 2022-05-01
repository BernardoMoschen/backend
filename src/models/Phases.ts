module.exports = (sequelize: any, DataTypes: any) => {
  const Phases = sequelize.define(
    'Phases',
    {
      id: {
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      schema: 'public',
      tableName: 'meta_league_phases',
      timestamps: false
    }
  )

  return Phases
}
