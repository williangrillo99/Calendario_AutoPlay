const rotasTurmas = require('express').Router()
const TurmaController = require('../controllers/TurmaController')

rotasTurmas.get('/', async (req, res)=>{
    const turmas = await TurmaController.listar()

    if(!turmas){
        res.json({erro: erro.message})
    }
    res.render('../api/views/turmas', {
        title: 'Turmas',
        turmas: turmas
    })
})

rotasTurmas.post('/cadastro', async (req, res) =>{
    const resultado = req.body
    const turma = await TurmaController.criar(resultado)

    if(!turma){
        res.json({erro: erro.message})
    }
    
    res.json(turma)
})


module.exports = rotasTurmas;