module.exports = (sequelize: any, DataTypes: any) => {
  const FeedbackSettings = sequelize.define(
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

  return FeedbackSettings
}
