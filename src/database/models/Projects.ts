module.exports = (sequelize: any, DataTypes: any) => {
  const Projects = sequelize.define(
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

  Projects.associate = function (models: any) {
    Projects.belongsTo(models.Allocations, {
      foreignKey: 'id',
      targetKey: 'project_id'
    })

    Projects.hasMany(models.Feedback, {
      foreignKey: 'id'
    });
  }

  return Projects
}
