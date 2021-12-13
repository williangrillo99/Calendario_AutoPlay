const sequelize = require('sequelize')
const connection = require('../../databases/connection')

const colunas = {
    nome: {
        type: sequelize.STRING,
        allowNull: false
    },
    pilar: {
        type: sequelize.STRING,
        allowNull: false
    },
    horas: {
        type: sequelize.DOUBLE,
        allowNull: false
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'disciplina',
    timestamps: true,
    createdAt: 'dataCriacao',
    updatedAt: 'dataAtualizacao', 
}

module.exports = connection.define('disciplina', colunas, opcoes)