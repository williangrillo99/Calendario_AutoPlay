'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      turmas.hasMany(models.eventos, {
        foreignKey: 'id_turma', as: 'turma'
      })
      turmas.belongsTo(models.pilares,{
        foreignKey: 'id_pilar', as: 'pilar'
      })
    }
  };
  turmas.init({
    qtd_alunos: DataTypes.INTEGER,
    ano: DataTypes.STRING,
    semestre: DataTypes.STRING,
    nome: DataTypes.STRING,
    periodo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'turmas',
  });
  return turmas;
};