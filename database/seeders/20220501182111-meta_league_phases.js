'use strict';

const phases = [
  {
    name: 'Celebração'
  },
  {
    name: 'Labs'
  },
  {
    name: 'Beta'
  },
]

module.exports = {
  async up (queryInterface, _Sequelize) {
      await queryInterface.bulkInsert('meta_league_phases', phases )
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('meta_league_phases', {
      name: {
        [Op.in]: phases.map((phase) => phase.name)
      }
    },
   {})
  }
};
