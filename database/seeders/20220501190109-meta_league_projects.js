'use strict';

const projects = [
  {
    name: 'Gerenciamento Unimed'
  },
  {
    name: 'Alocações'
  },
  {
    name: 'Todos projetos internos'
  },
  {
    name: 'Bug Trap'
  },
  {
    name: 'Dashboard'
  },
  {
    name: 'Indicadores'
  },
  {
    name: 'BRF'
  },
  {
    name: 'Skills'
  },
  {
    name: 'SP Urbanismo'
  },
  {
    name: 'Equipe Dados'
  },
]

module.exports = {
  async up (queryInterface, _Sequelize) {
      await queryInterface.bulkInsert('meta_league_projects', projects )
  },

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op
    return queryInterface.bulkDelete('meta_league_projects', {
      name: {
        [Op.in]: projects.map((project) => project.name)
      }
    },
   {})
  }
};
