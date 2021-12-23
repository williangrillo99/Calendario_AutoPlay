const rotasEventos = require('express').Router()
const EventosController = require('../controllers/EventosController')
const AreasController = require('../controllers/AreasController')
const UsuarioController = require('../controllers/UsuarioController')
const DisciplinaController = require('../controllers/DisciplinaController')
const TurmaController = require('../controllers/TurmaController')

rotasEventos.get('/', async (req, res) =>{
    const eventos = await EventosController.listar()
    const areas = await AreasController.listar()
    const professores = await UsuarioController.listar()
    const disciplinas = await DisciplinaController.listar()
    const turmas = await TurmaController.listar()

    if(!eventos){
        res.json({erro: eventos.message})
    }
    res.render('../api/views/index', {
        title: 'Agenda',
        eventos: eventos,
        salas: areas,
        professores: professores,
        disciplinas: disciplinas,
        turmas: turmas
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
