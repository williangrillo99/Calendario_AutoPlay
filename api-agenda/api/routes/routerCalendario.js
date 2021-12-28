const rotaCalendario = require('express').Router()
const CalendarioController = require('../controllers/CalendarioController')


rotaCalendario.get('/', (req, res) =>{

    res.render('../api/views/calendario', {
        title: 'Calendario'
    })
})

rotaCalendario.get('/eventos', async (req, res) =>{
   const eventos = await CalendarioController.listar();
   res.send(eventos);
})

module.exports = rotaCalendario;