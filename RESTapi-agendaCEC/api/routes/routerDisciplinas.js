const rotasDisciplinas = require('express').Router()
const DisciplinaController = require('../controllers/DisciplinaController')

rotasDisciplinas.get('/', async (req, res)=>{
    const disciplinas = await DisciplinaController.listar();

    if(!disciplinas){
        res.json({erro: erro.message})
    }
    res.json(disciplinas)
})

rotasDisciplinas.post('/cadastro', async (req, res) =>{
    const resultado = req.body
    const turma = await DisciplinaController.criar(resultado)

    if(!turma){
        res.json({erro: erro.message})
    }
    
    res.json(turma)
})

rotasDisciplinas.put('/atualizar/:idDisciplina', async (req, res)=>{
    const id = req.params.idDisciplina
    const informacoesAtualizadas = req.body
    const resposta = await DisciplinaController.atualizar({...informacoesAtualizadas, id:id})
    res.json(resposta)
})

rotasDisciplinas.delete('/deletar/:idDisciplina', async (req, res) => {
    const id = req.params.idDisciplina;
    const resposta = await DisciplinaController.deletar(id);
    res.json(resposta)
})


module.exports = rotasDisciplinas;