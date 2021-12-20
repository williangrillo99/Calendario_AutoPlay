const rotasEventos = require('express').Router()
const EventosController = require('../controllers/EventosController')
const AreasController = require('../controllers/AreasController')

rotasEventos.get('/', async (req, res) =>{
    const eventos = await EventosController.listar()
    const areas = await AreasController.listar()

    if(!eventos){
        res.json({erro: eventos.message})
    }
    res.render('../api/views/index', {
        title: 'Agenda',
        eventos: eventos,
        salas: areas
    })
})

rotasEventos.post('/cadastro', async (req, res) =>{
    try{
        const resultado = req.body
        const eventos = await EventosController.criar(resultado)
        res.json(eventos)
    }catch(erro){
        res.json({erro: erro.message})
    }
})

module.exports = rotasEventos;
