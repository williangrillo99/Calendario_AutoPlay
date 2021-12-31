const rotasEventos = require('express').Router()
const EventosController = require('../controllers/EventosController')
const AreasController = require('../controllers/AreasController')
const UsuarioController = require('../controllers/UsuarioController')
const DisciplinaController = require('../controllers/DisciplinaController')
const TurmaController = require('../controllers/TurmaController')

rotasEventos.get('/', async (req, res) =>{
    const dataEnviada = req.query.data
    // console.log(dataEnviada);

    const eventos = await EventosController.listar(dataEnviada)
    const areas = await AreasController.listar()
    const professores = await UsuarioController.listar()
    const disciplinas = await DisciplinaController.listar()
    const turmas = await TurmaController.listar()

    
    const data = await EventosController.dataFormatada(dataEnviada)

    if(!eventos){
        res.json({erro: eventos.message})
    }
    res.render('../api/views/index', {
        title: 'Agenda',
        data: data,
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
        const data = resultado.data
        const eventos = await EventosController.criar(resultado)
        res.status(200).redirect(`/?data=${data}`)  
    }catch(erro){
        res.status(500).json({erro: erro.message})
    }
})

module.exports = rotasEventos;
