'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pilares extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      pilares.hasMany(models.turmas, {
        foreignKey: 'id_pilar'
      })
    }
  };
  pilares.init({
    pilar: DataTypes.STRING,
    categoria: DataTypes.STRING,
    cor: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pilares',
  });
  return pilares;
};