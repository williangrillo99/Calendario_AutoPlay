'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('eventos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dsc_evento: {
        type: Sequelize.STRING
      },
      data:{
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      horario_inicio: {
        type: Sequelize.TIME,
        allowNull:false
      },
      horario_fim: {
        type: Sequelize.TIME,
        allowNull:false
      },
      id_local: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: "locais", key: 'id'}
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: "usuarios", key: 'id'}
      },
      id_disciplina: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: "disciplinas", key: 'id'}
      },
      id_turma: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model: "turmas", key: 'id'}
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
    await queryInterface.dropTable('eventos');
  }
};