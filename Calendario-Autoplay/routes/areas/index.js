const rotasAreas = require('express').Router()
const Area = require('./Area')

rotasAreas.get('/', async (req, res) => {
    const areas = await Area.listar()
    // console.log(areas);
    res.render('../views/salas', {
        title: 'Salas',
        areas: areas
    })
})

rotasAreas.post('/cadastro', async(req, res) => {
    const resultado = req.body;
    const area = new Area(resultado)
    await area.criar()
    res.redirect('/areas')
})

module.exports = rotasAreas 
