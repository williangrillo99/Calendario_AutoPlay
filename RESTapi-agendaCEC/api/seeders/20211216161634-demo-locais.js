'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('locais', [
        {
          nome: 'Sala 1',
          capacidade: '20',
          descricao: 'Sala de aula',
          sistemas: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Sala 2',
          capacidade: '20',
          descricao: 'Sala de aula',
          sistemas: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Sala 3',
          capacidade: '20',
          descricao: 'Sala de aula',
          sistemas: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Sala 4',
          capacidade: '20',
          descricao: 'Sala de aula',
          sistemas: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Sala 5',
          capacidade: '20',
          descricao: 'Sala de aula',
          sistemas: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Sala 6',
          capacidade: '20',
          descricao: 'Sala de aula',
          sistemas: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Galpão',
          capacidade: '20',
          descricao: 'Sala de aula',
          sistemas: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Área externa',
          capacidade: '20',
          descricao: 'Sala de aula',
          sistemas: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          nome: 'Teams',
          capacidade: '20',
          descricao: 'Sala de aula',
          sistemas: false,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('locais', null, {});
     
  }
};
