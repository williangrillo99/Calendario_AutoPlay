const rotasEventos = require('express').Router()
const EventosController = require('../controllers/EventosController')

const SerializadorEvento = require('../Serializador').SerializadorEvento

rotasEventos.get('/', async (req, res) =>{
    const eventos = await EventosController.listar()

    if(!eventos){
        res.status(500).json({erro: eventos.message})
    }
    res.status(200).json(eventos)
})

rotasEventos.post('/cadastro', async (req, res, prox) =>{
    try{
        const resultado = req.body
        const eventos = await EventosController.criar(resultado)
        const serializador = new SerializadorEvento(
            res.getHeader('Content-Type')
        )
        res.status(200)
        res.send(serializador.serializar(
            eventos
        ))  
    }catch(error){
        prox(error)
    }
})

module.exports = rotasEventos;
