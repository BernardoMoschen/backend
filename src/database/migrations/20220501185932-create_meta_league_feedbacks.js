'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('meta_league_feedbacks', {
        id: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true
        },
        allocation_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'meta_league_allocations',
              schema: 'public'
            },
            key: 'id'
          },
        },
        created_at: {
          type: Sequelize.DataTypes.DATE,
          defaultValue: Sequelize.fn('now')
        },
      })
    },
  
    async down (queryInterface, _Sequelize) {
      return queryInterface.dropTable('meta_league_feedbacks')
    }
  
};
