module.exports = (sequelize: any, DataTypes: any) => {
  const Teams = sequelize.define(
    'Teams',
    {
      id: {
        field: 'id',
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
      },
    },
    {
      schema: 'public',
      tableName: 'meta_league_teams',
      timestamps: false
    }
  )

  return Teams
}
