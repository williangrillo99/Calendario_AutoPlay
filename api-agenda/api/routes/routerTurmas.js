const rotasTurmas = require('express').Router()
const axios = require('axios')

rotasTurmas.get('/', async (req, res)=>{
    const turmas = await axios.get('http://localhost:8080/turmas')
    const pilares = await axios.get('http://localhost:8080/pilares');

    if(!turmas){
        res.json({erro: erro.message})
    }
    res.render('../api/views/turmas', {
        title: 'Turmas',
        turmas: turmas.data,
        pilares: pilares.data
    })
})

rotasTurmas.post('/cadastro', async (req, res) =>{
    const resultado = req.body
    const turma = await axios.post('http://localhost:8080/turmas/cadastro', resultado);

    if(!turma){
        res.json({erro: erro.message})
    }
    
    res.redirect('/turmas')
})


rotasTurmas.post('/atualizar/:idTurma', async (req, res)=>{
    const id = req.params.idTurma
    const informacoesAtualizadas = req.body
    await axios.put(`http://localhost:8080/turmas/atualizar/${id}`, informacoesAtualizadas);
    res.redirect('/turmas')
})

rotasTurmas.get('/deletar/:idTurma', async (req, res) => {
    const id = req.params.idTurma;
    await axios.delete(`http://localhost:8080/turmas/deletar/${id}`);
    res.redirect('/turmas')
})

module.exports = rotasTurmas;