'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('turmas_Disciplinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      horas_realizadas: {
        type: Sequelize.DOUBLE
      },
      id_disciplina:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "disciplinas", key:  'id'}
      },
      id_turma:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "turmas", key:  'id'}
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
    await queryInterface.dropTable('turmas_Disciplinas');
  }
};