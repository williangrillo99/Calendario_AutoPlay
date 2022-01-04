const modelos = require('../models')
const { Op } = require('sequelize');

class UsuarioController{
    static async criar(infoUsuario){
        const usuario = await modelos.usuarios.create({...infoUsuario,cargo: 'Professor'})
        return usuario
    }
    
    static async listar(){
        try {
            return await modelos.usuarios.findAll()
            
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static async atualizar(infoUsuario){
        return await modelos.usuarios.update(
            infoUsuario,
            {
                where: {id: infoUsuario.id}
            }
        ) 
    }
    static async deletar(id){
        const professorDeletado = modelos.usuarios.findOne({
            where: {id: id}
        })

        if(!professorDeletado){
            throw new Error('Professor não encontrado!')
        }

        await modelos.usuarios.destroy(
            {
                where: {id: id}
            }
        )

        return professorDeletado
    }

    static async pegaIdProfessor(id){
        const professor = await modelos.usuarios.findOne({
            where: {id:  id}
        })

        if(!professor){
            throw new Error(`Professor ${id} não encontrado!`)
        }
        return professor;
    }

}

module.exports = UsuarioController;