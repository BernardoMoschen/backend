'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('meta_league_feedbacks', {
        id: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true
        },
        professional_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'meta_league_professionals',
              schema: 'public'
            },
            key: 'id'
          },
        },
        project_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'meta_league_projects',
              schema: 'public'
            },
            key: 'id'
          },
        },
        manager_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'meta_league_managers',
              schema: 'public'
            },
            key: 'id'
          },
        },
        copy_to: {
          type: Sequelize.DataTypes.TEXT,
          allowNull: true,
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
