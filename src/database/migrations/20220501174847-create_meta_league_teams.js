'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('meta_league_teams', {
        id: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.fn('now')
        },
      })
    },
  
    async down (queryInterface, _Sequelize) {
      return queryInterface.dropTable('meta_league_teams')
    }
  
};
