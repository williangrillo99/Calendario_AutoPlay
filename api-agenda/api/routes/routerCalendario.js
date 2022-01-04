const rotaCalendario = require('express').Router()
const axios = require('axios')


rotaCalendario.get('/', (req, res) =>{
    res.render('../api/views/calendario', {
        title: 'Calendario'
    })
})

rotaCalendario.get('/eventos', async (req, res) =>{
   const eventos = await axios.get('http://localhost:8080/calendario/eventos')
   res.json(eventos.data);
})

module.exports = rotaCalendario;