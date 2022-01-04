const rotasAreas = require('express').Router()
const axios = require('axios')

rotasAreas.get('/', async (req, res) => {
    const areas = await axios.get('http://localhost:8080/areas')
    // console.log(areas);
    res.render('../api/views/salas', {
        title: 'Salas',
        areas: areas.data
    })
})

rotasAreas.post('/cadastro', async(req, res) => {
    const resultado = req.body;
    const areaCriada = await axios.post('http://localhost:8080/professores', resultado)
    res.json(areaCriada)
})

module.exports = rotasAreas