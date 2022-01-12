const modelos = require('../models')
const { Op } = require('sequelize');

const CampoInvalido = require('../errors/CampoInvalido');
const EmailExistente = require('../errors/EmailExistente');
const NaoEncontrado = require('../errors/NaoEncontrado')

class UsuarioController{

    static async validar(dadosUsuario){
        //verifica email
        if(typeof dadosUsuario.email !=='string' || dadosUsuario.email.length === 0){
            throw new CampoInvalido('email do professor')
        }
        //caso email seja valido pesquisa para verificar se ja existe na base 
        const verificaEmail = await modelos.usuarios.findOne({
            where: {
                email: dadosUsuario.email
            },
            raw: true
        })

        if(verificaEmail){
            throw new EmailExistente()
        }
        if(typeof dadosUsuario.nome !=='string' || dadosUsuario.nome.length === 0){
            throw new CampoInvalido('nome do professor')
        }
        if(typeof dadosUsuario.abreviacao !=='string' || dadosUsuario.abreviacao.length === 0){
            throw new CampoInvalido('abreviacao do professor')
        }
    }

    static async criar(infoUsuario){
        await this.validar(infoUsuario)
        const usuario = await modelos.usuarios.create({...infoUsuario,cargo: 'Professor'})
        return usuario
    }
    
    static async listar(){
        return await modelos.usuarios.findAll({
            raw: true
        })
    }

    static async atualizar(infoUsuario){
        await this.validar(infoUsuario);

        return await modelos.usuarios.update(
            infoUsuario,
            {
                where: {id: infoUsuario.id}
            }
        ) 
    }
    static async deletar(id){
        const professorDeletado = await modelos.usuarios.findOne({
            where: {id: id},
            raw: true
        })

        if(!professorDeletado){
            throw new NaoEncontrado('Professor não encontrado!')
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
            throw new NaoEncontrado(`Professor ${id} não encontrado!`)
        }
        return professor;
    }

}

module.exports = UsuarioController;