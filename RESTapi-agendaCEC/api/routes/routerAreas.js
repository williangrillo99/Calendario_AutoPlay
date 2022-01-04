const rotasAreas = require('express').Router()
const AreasController = require('../controllers/AreasController')

rotasAreas.get('/', async (req, res) => {
    const areas = await AreasController.listar()
    // console.log(areas);
    res.json(areas)
})

rotasAreas.post('/cadastro', async(req, res) => {
    const resultado = req.body;
    const areaCriada = await AreasController.criar(resultado)
    res.json(areaCriada)
})

module.exports = rotasAreas