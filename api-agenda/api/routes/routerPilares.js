const rotasPilares = require('express').Router()
const modelos = require('../models')

rotasPilares.get('/:pilar', async (req, res) =>{
    const pilar = req.params.pilar
    const pilares = await modelos.pilares.findAll({
        where: {pilar: pilar}
    })
    res.json(pilares)

})

module.exports = rotasPilares;