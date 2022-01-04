const rotasEventos = require('express').Router()
const axios = require('axios');
const Data = require('../helper/Data');
const Evento = require('../helper/Evento');

rotasEventos.get('/', async (req, res) =>{
    const dataEnviada = req.query.data
    // console.log(dataEnviada);

    const areas = await axios.get('http://localhost:8080/areas');
    const professores = await axios.get('http://localhost:8080/professores');
    const disciplinas = await axios.get('http://localhost:8080/disciplinas');
    const turmas = await axios.get('http://localhost:8080/turmas');
    const eventos = await axios.get('http://localhost:8080/eventos');

    const verificaDataEvento = Evento.verificaDataEvento(eventos.data, dataEnviada);
    const data = Data.dataFormatada(dataEnviada);

    if(!eventos){
        res.json({erro: eventos.message})
    }
    res.render('../api/views/index', {
        title: 'Agenda',
        data: data,
        eventos: verificaDataEvento,
        salas: areas.data,
        professores: professores.data,
        disciplinas: disciplinas.data,
        turmas: turmas.data
    })
})


module.exports = rotasEventos;
