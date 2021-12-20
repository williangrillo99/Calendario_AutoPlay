'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      locais.hasMany(models.eventos, {
        foreignKey: 'id_local', as: 'local'
      })
    }
  };
  locais.init({
    nome: DataTypes.STRING,
    capacidade: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    sistemas: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'locais',
  });
  return locais;
};