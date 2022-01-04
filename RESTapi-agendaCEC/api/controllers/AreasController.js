const modelos = require('../models')
const { Op } = require('sequelize');

class AreasController{
    static async criar(infoArea){
        const usuario = await modelos.locais.create(infoArea)
        return usuario
    }
    
    static async listar(){
        try {
            const areas = await modelos.locais.findAll()
            areas.forEach(area => {
                if(!area.sistemas){
                    area.sistemas = "Não possui sistemas"
                }else{
                    area.sistemas = "Possui sistemas"
                }
            })

            return areas
            
        } catch (error) {
            throw new Error(error.message)
        }
    }   

    static async pegaIdLocal(id){
        const local = await modelos.locais.findOne({
            where: {id: id}
        })

        if(!local){
            throw new Error(`local ${id} não encontrado!`)
        }
        return local;
    }
}


module.exports = AreasController;