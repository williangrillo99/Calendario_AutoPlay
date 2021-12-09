const sequelize = require('sequelize')
const connection = require('../../databases/connection')

const colunas = {
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    pilar: {
        type: sequelize.STRING,
        allowNull: false
    },
    abreviacao: {
        type: sequelize.STRING,
        allowNull: false
    },
    disponibilidade: {
        type: sequelize.ENUM('Disponivel', 'Atestado', 'Ferias'),
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'professor',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao', 
}

module.exports = connection.define('professor', colunas, opcoes)