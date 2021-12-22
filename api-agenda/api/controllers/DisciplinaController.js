const modelos = require('../models')
const { Op } = require('sequelize');

class DisciplinaController {
    static async criar(infoDisciplina){
        try {
            const turma = await modelos.disciplinas.create(infoDisciplina)
            return turma
        } catch (error) {
            throw new Error(error.message)
        }
    }
    
    static async listar(){
        try {
            return await modelos.disciplinas.findAll()
            
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async atualizar(infoDisciplina){
        return await modelos.disciplinas.update(
            infoDisciplina,
            {
                where: {id: infoDisciplina.id}
            }
        ) 
    }

    static async deletar(id){
        return await modelos.disciplinas.destroy(
            {
                where: {id: id}
            }
        )
    }

    static async pegaIdDisciplina(id){
        const disciplina = await modelos.disciplinas.findOne({
            where: {id: id}
        })

        if(!disciplina){
            throw new Error(`disciplina ${id} não encontrado!`)
        }
        return disciplina;
    }
}

module.exports = DisciplinaController;