'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      eventos.belongsTo(models.usuarios, {
        foreignKey: 'id_usuario'
      })
      eventos.belongsTo(models.disciplinas, {
        foreignKey: 'id_disciplina'
      })
      eventos.belongsTo(models.locais, {
        foreignKey: 'id_local', as: 'local'
      })
      eventos.belongsTo(models.turmas, {
        foreignKey: 'id_turma'
      })
    
    }
  };
  eventos.init({
    dsc_evento: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    horario_inicio: DataTypes.DATE,
    horario_fim: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'eventos',
  });
  return eventos;
};