'use strict';

const phases = [
  {
    name: 'Turma Piloto'
  },
  {
    name: 'Turma 1'
  },
  {
    name: 'Turma 2'
  },
  {
    name: 'Avulso'
  },
]

module.exports = {
  async up (queryInterface, _Sequelize) {
      await queryInterface.bulkInsert('meta_league_teams', phases )
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('meta_league_teams', {
      name: {
        [Op.in]: phases.map((phase) => phase.name)
      }
    },
   {})
  }
};
