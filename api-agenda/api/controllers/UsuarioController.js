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
        return await modelos.usuarios.destroy(
            {
                where: {id: id}
            }
        )
    }

    static async pegaIdProfessor(nome){
        const professor = await modelos.usuarios.findOne({
            where: {abreviacao: {[Op.like]: nome}}
        })

        if(!professor){
            throw new Error(`Professor ${nome} não encontrado!`)
        }
        return professor;
    }

}

module.exports = UsuarioController;