module.exports = (sequelize: any, DataTypes: any) => {
  const AdminUser = sequelize.define(
    "AdminUser",
    {
      id: {
        field: "id",
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      deleted_at: {
        type: DataTypes.DATE,
      },
    },
    {
      schema: "public",
      tableName: "meta_league_admin_users",
      timestamps: false,
    }
  );

  return AdminUser;
};
