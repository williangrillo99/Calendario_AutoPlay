const rotasDisciplinas = require('express').Router()
const DisciplinaController = require('../controllers/DisciplinaController')
const PilarController = require('../controllers/PilarController')


rotasDisciplinas.get('/', async (req, res)=>{
    const disciplinas = await DisciplinaController.listar();
    const pilares = await PilarController.pegarPilares();

    if(!disciplinas){
        res.json({erro: erro.message})
    }
    res.render('../api/views/disciplina', {
        title: 'Disciplinas',
        disciplinas: disciplinas,
        pilares: pilares
    })
})

rotasDisciplinas.post('/cadastro', async (req, res) =>{
    const resultado = req.body
    const turma = await DisciplinaController.criar(resultado)

    if(!turma){
        res.json({erro: erro.message})
    }
    
    res.redirect('/disciplinas')
})

rotasDisciplinas.post('/atualizar/:idDisciplina', async (req, res)=>{
    const id = req.params.idDisciplina
    const informacoesAtualizadas = req.body
    await DisciplinaController.atualizar({...informacoesAtualizadas, id:id})
    res.redirect('/disciplinas')
})

rotasDisciplinas.get('/deletar/:idDisciplina', async (req, res) => {
    const id = req.params.idDisciplina;
    await DisciplinaController.deletar(id);
    res.redirect('/disciplinas')
})


module.exports = rotasDisciplinas;