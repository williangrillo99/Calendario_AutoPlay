'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('turmas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qtd_alunos: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      ano: {
        allowNull: false,
        type: Sequelize.STRING
      },
      semestre: {
        allowNull: false,
        type: Sequelize.STRING
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      periodo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      id_pilar: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: "pilares", key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('turmas');
  }
};