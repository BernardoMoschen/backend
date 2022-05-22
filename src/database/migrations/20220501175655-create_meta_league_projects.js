'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('meta_league_projects', {
        id: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        active: {
          type: Sequelize.DataTypes.BOOLEAN,
          defaultValue: true,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.fn('now')
        },
        updated_at: {
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.fn('now')
        },
        deleted_at: {
          type: Sequelize.DataTypes.DATE,
          defaultValue: null
        },
      })
    },
  
    async down (queryInterface, _Sequelize) {
      return queryInterface.dropTable('meta_league_projects')
    }
  
};
