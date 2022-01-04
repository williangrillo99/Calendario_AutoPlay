'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('turmas', [
        {
          qtd_alunos: 14,
          ano: '2021',
          semestre: '2',
          nome: 'Autoplay 2T',
          periodo: 'Vespertino',
          id_pilar: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          qtd_alunos: 35,
          ano: '2021',
          semestre: '2',
          nome: 'Telemarkting 2T',
          periodo: 'Integral',
          id_pilar: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          qtd_alunos: 15,
          ano: '2021',
          semestre: '1',
          nome: 'Autoplay 1T',
          periodo: 'Vespertino',
          id_pilar: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          qtd_alunos: 30,
          ano: '2021',
          semestre: '2',
          nome: 'Vendedor Técnico 5T',
          periodo: 'Vespertino',
          id_pilar: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          qtd_alunos: 15,
          ano: '2021',
          semestre: '1',
          nome: 'Autocode 1T',
          periodo: 'Matutino',
          id_pilar: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ], {});
    
    },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('turmas', null, {});
    
  }
};
