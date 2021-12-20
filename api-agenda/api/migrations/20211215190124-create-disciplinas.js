'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('disciplinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      horas: {
        type: Sequelize.DOUBLE
      },
      name: {
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
    await queryInterface.dropTable('disciplinas');
  }
};