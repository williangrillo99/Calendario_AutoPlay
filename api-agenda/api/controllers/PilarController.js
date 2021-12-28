const modelos = require('../models')

class PilarController{
    static async pegarPilares(){
        try {
            const pilares = await modelos.pilares.findAll({
                attributes: ['pilar'],group: ['pilar'] 
            })
            return pilares;
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

module.exports = PilarController;