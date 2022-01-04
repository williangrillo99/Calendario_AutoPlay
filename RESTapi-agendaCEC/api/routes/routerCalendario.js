const rotaCalendario = require('express').Router()
const CalendarioController = require('../controllers/CalendarioController')

rotaCalendario.get('/eventos', async (req, res) =>{
   const eventos = await CalendarioController.listar();
   res.json(eventos);
})

module.exports = rotaCalendario;