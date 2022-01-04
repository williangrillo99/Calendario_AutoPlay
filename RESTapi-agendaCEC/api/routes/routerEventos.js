const rotasEventos = require('express').Router()
const EventosController = require('../controllers/EventosController')

rotasEventos.get('/', async (req, res) =>{
    const eventos = await EventosController.listar()

    if(!eventos){
        res.status(500).json({erro: eventos.message})
    }
    res.status(200).json(eventos)
})

rotasEventos.post('/cadastro', async (req, res) =>{
    try{
        const resultado = req.body
        const eventos = await EventosController.criar(resultado)
        res.status(200).json(eventos)  
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
})

module.exports = rotasEventos;
