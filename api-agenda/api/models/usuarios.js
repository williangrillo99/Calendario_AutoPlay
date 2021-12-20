'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      usuarios.hasMany(models.eventos, {
        foreignKey: 'id_usuario', as: 'usuario'
      })
    }
  };
  usuarios.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cargo: DataTypes.STRING,
    abreviacao: DataTypes.STRING,
    pilar: DataTypes.STRING,
    disponibilidade: DataTypes.ENUM('Disponivel', 'Atestado', 'Ferias')
  }, {
    sequelize,
    modelName: 'usuarios',
    freezeTableName: true,
    timestamps: true,
  }); 
  return usuarios;
};