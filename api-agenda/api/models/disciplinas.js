'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class disciplinas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      disciplinas.hasMany(models.eventos, {
        foreignKey: 'id_disciplina', as: 'disciplina'
      })
    }
  };
  disciplinas.init({
    horas: DataTypes.DOUBLE,
    name: DataTypes.STRING,
    pilar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'disciplinas',
  });
  return disciplinas;
};