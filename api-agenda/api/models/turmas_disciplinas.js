'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class turmas_Disciplinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.turmas.belongsToMany(models.disciplinas, {
        through: turmas_Disciplinas,
        uniqueKey:'id_turma'
      })
      models.disciplinas.belongsToMany(models.turmas, {
        through: turmas_Disciplinas,
        uniqueKey:  'id_disciplina'
      })
    }
  };
  turmas_Disciplinas.init({
    horas_realizadas: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'turmas_Disciplinas',
  });
  return turmas_Disciplinas;
};