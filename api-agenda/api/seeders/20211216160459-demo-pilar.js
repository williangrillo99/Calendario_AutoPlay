'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pilares', [
      {
        pilar: 'TI',
        categoria: 'Autoplay',
        cor: '#ff0000',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pilar: 'TI',
        categoria: 'Autocode',
        cor: '#0000ff',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pilar: 'TI',
        categoria: 'EAD',
        cor: '#00ff00',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pilar: 'Comercio',
        categoria: 'Telemarkting',
        cor: '#a3b52f',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        pilar: 'Comercio',
        categoria: 'Vendedor técnico',
        cor: '#a3b52f',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('pilares', null, {});
    
  }
};
