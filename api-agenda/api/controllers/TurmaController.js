const modelos = require('../models')
const { Op } = require('sequelize');

class TurmaController {
    static async criar(infoTurma){
        try {
            const turma = await modelos.turmas.create(infoTurma)
            return turma
        } catch (error) {
            throw new Error(error.message)
        }
    }
    
    static async listar(){
        try {
            return await modelos.turmas.findAll({
                attributes: { exclude: ['id_pilar'] },
                include: {model: modelos.pilares, as: 'pilar'}
              })
            
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async pegaIdTurma(nome){
        const turma = await modelos.turmas.findOne({
            where: {nome: {[Op.iLike]: nome}}
        })

        if(!turma){
            throw new Error(`turma ${nome} não encontrado!`)
        }
        return turma;
    }
}

module.exports = TurmaController;