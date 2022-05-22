"use strict";

const professionals = [
  {
    name: "Anderson Felipe Silva do Nascimento",
    birthday_date: "2022-08-31",
    email: "anderson.nascimento@meta.com.br",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Angel Ledebrum Granville",
    birthday_date: "2022-02-22",
    email: "angel.granville@meta.com.br",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Blucilhã do Nascimento Dias",
    birthday_date: "2022-12-13",
    email: "blucilha.dias@meta.com.br",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Bruno Moreira Santos",
    birthday_date: "2022-03-27",
    email: "bruno.moreira@meta.com.br",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Camila Fagundes Santarem",
    birthday_date: "2022-09-23",
    email: "camila.santarem@meta.com.br",
    admission_date: "2021-12-16",
    team: "Avulso",
    phase: "Labs",
  },
  {
    name: "David William Menezes de Lima",
    email: "david.lima@meta.com.br",
    birthday_date: "2022-04-30",
    admission_date: "2021-12-16",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Fabio Cicero Marturano Junior",
    email: "fabio.marturano@meta.com.br",
    birthday_date: "2022-12-09",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Gabriel Orion Castro Fontoura",
    email: "gabriel.fontoura@meta.com.br",
    birthday_date: "2022-07-12",
    admission_date: "2021-05-19",
    team: "Turma Piloto",
    phase: "Labs",
  },
  {
    name: "Gildeir Lopes Rodrigues",
    email: "gildeir.rodrigues@meta.com.br",
    birthday_date: "2022-10-10",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Guilherme da Cunha Pioner",
    email: "guilherme.pioner@meta.com.br",
    birthday_date: "2022-01-20",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "João Rafael de Souza Veronezi Ferrão",
    email: "joao.ferrao@meta.com.br",
    birthday_date: "2022-09-17",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "João Vítor Fidanza Artidão",
    email: "joao.artidao@meta.com.br",
    birthday_date: "2022-02-14",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "João Vítor Mombach Ribas",
    email: "joao.ribas@meta.com.br",
    birthday_date: "2022-04-04",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Leonardo Martins Lima",
    email: "leonardo.lima@meta.com.br",
    birthday_date: "2022-10-29",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Luiz Eduardo Marcolin",
    email: "luiz.marcolin@meta.com.br",
    birthday_date: "2022-10-31",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Luiz Inácio Costa Rinaldi",
    email: "luiz.rinaldi@meta.com.br",
    birthday_date: "2022-12-06",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Marcos Aurélio Pedroso Leandro",
    email: "marcos.leandro@meta.com.br",
    birthday_date: "2022-08-03",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Matheus Silva Oliveira",
    email: "matheus.silva@meta.com.br",
    birthday_date: "2022-09-05",
    admission_date: "2021-09-08",
    team: "Turma 1",
    phase: "Labs",
  },
  {
    name: "Michael Lanius Friedrich",
    email: "michael.friedrich@meta.com.br",
    birthday_date: "2022-10-07",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Pedro Lucas Trentin Agostini",
    email: "pedro.agostini@meta.com.br",
    birthday_date: "2022-03-05",
    admission_date: "2021-12-16",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Pedro Stanislau Tomacheski",
    email: "pedro.tomacheski@meta.com.br",
    birthday_date: "2022-02-10",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Rian Luís Matos",
    email: "rian.matos@meta.com.br",
    birthday_date: "2022-02-10",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Rodrigo Monteiro Sudario",
    email: "rodrigo.sudario@meta.com.br",
    birthday_date: "2022-01-09",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Ruan Miguel Pereira e Silva",
    email: "ruan.pereira@meta.com.br",
    birthday_date: "2022-05-29",
    admission_date: "2021-12-06",
    team: "Turma 2",
    phase: "Labs",
  },
  {
    name: "Tiago Felipe Zardin",
    email: "tiago.zardin@meta.com.br",
    birthday_date: "2022-07-13",
    admission_date: "2021-09-08",
    team: "Turma 1",
    phase: "Labs",
  },
  {
    name: "Nayara Jaqueline Andrade Borges",
    email: "nayara.borges@meta.com.br",
    birthday_date: "2022-02-10",
    admission_date: "2022-02-21",
    team: "Turma 2",
    phase: "Labs",
  },
];

module.exports = {
  async up(queryInterface, _Sequelize) {
    const professionalsList = await Promise.all(professionals.flatMap(async (professional) => {
      return {
        name: professional.name,
        email: professional.email,
        birthday_date: professional.birthday_date,
        admission_date: professional.admission_date,
        team_id: await queryInterface.rawSelect('meta_league_teams', {
          where: {
            name: professional.team
          }
        }, ['id']),
        phase_id: await queryInterface.rawSelect('meta_league_phases', {
          where: {
            name: professional.phase
          }
        }, ['id']),
      }
    }))
    return queryInterface.bulkInsert('meta_league_professionals', professionalsList)
  },

  async down(queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "meta_league_professionals",
      {
        name: {
          [Op.in]: professionals.map((professional) => professional.name),
        },
      },
      {}
    );
  },
};
