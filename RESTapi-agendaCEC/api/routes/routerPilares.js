const rotasPilares = require('express').Router()
const PilarController = require('../controllers/PilarController')

rotasPilares.get('/', async (req, res) =>{
    try {
        const pilares = await PilarController.pegarPilares()

        if(pilares.length == 0){
            res.json({mensagem: `Nenhum pilar encontrado!`})
        }

        res.json(pilares)
    } catch (error) {
        res.json({erro: erro.message})
        
    }

})


rotasPilares.get('/:pilar', async (req, res) =>{
    try {
        const pilar = req.params.pilar
        const pilares = await PilarController.pegaCategoriasPorPilar(pilar)

        if(pilares.length == 0){
            res.json({mensagem: `Categorias referentes as pilar ${pilar} não encontrado!`})
        }

        res.json(pilares)
    } catch (error) {
        res.json({erro: erro.message})
        
    }

})

module.exports = rotasPilares;