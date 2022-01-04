const rotasTurmas = require('express').Router()
const TurmaController = require('../controllers/TurmaController')
const PilarController = require('../controllers/PilarController')

rotasTurmas.get('/', async (req, res)=>{
    const turmas = await TurmaController.listar()

    if(!turmas){
        res.json({erro: erro.message})
    }
    res.json(turmas)
})

rotasTurmas.post('/cadastro', async (req, res) =>{
    const resultado = req.body
    const turma = await TurmaController.criar(resultado)

    if(!turma){
        res.json({erro: erro.message})
    }
    
    res.json(turma)
})


rotasTurmas.put('/atualizar/:idTurma', async (req, res)=>{
    const id = req.params.idTurma
    const informacoesAtualizadas = req.body
    const resposta = await TurmaController.atualizar({...informacoesAtualizadas, id:id})
    res.json(resposta)
})

rotasTurmas.delete('/deletar/:idTurma', async (req, res) => {
    const id = req.params.idTurma;
    const resposta = await TurmaController.deletar(id);
    res.json(resposta)
})

module.exports = rotasTurmas;