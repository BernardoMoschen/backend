'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('meta_league_professionals', {
        id: {
          primaryKey: true,
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true
        },
        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false
        },
        birthday_date: {
          type: Sequelize.DataTypes.STRING(10),
          allowNull: true
        },  
        admission_date: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: false
        },
        phase_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'meta_league_phases',
              schema: 'public'
            },
            key: 'id'
          },
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
      })
    },
  
    async down (queryInterface, _Sequelize) {
      return queryInterface.dropTable('meta_league_professionals')
    }
  
};
