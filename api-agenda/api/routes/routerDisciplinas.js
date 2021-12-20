const rotasDisciplinas = require('express').Router()
const DisciplinaController = require('../controllers/DisciplinaController')


rotasDisciplinas.get('/', async (req, res)=>{
    const disciplinas = await DisciplinaController.listar()

    if(!disciplinas){
        res.json({erro: erro.message})
    }
    res.render('../api/views/disciplina', {
        title: 'Disciplinas',
        disciplinas: disciplinas
    })
})

rotasDisciplinas.post('/cadastro', async (req, res) =>{
    const resultado = req.body
    const turma = await DisciplinaController.criar(resultado)

    if(!turma){
        res.json({erro: erro.message})
    }
    
    res.json(turma)
})


module.exports = rotasDisciplinas;