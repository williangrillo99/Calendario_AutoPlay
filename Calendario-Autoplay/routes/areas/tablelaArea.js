const sequelize = require('sequelize')
const connection = require('../../databases/connection')

const colunas = {
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    capacidade: {
        type: sequelize.INTEGER,
        allowNull: true
    },
    sistemas: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    descricao: {
        type: sequelize.STRING,
        allowNull: true
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'area',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao', 
}

module.exports = connection.define('area', colunas, opcoes)