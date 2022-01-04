const rotasDisciplinas = require('express').Router()
const axios = require('axios')


rotasDisciplinas.get('/', async (req, res)=>{
    const disciplinas = await axios.get('http://localhost:8080/disciplinas');
    const pilares = await axios.get('http://localhost:8080/pilares');

    if(!disciplinas){
        res.json({erro: erro.message})
    }
    res.render('../api/views/disciplina', {
        title: 'Disciplinas',
        disciplinas: disciplinas.data,
        pilares: pilares.data
    })
})

rotasDisciplinas.post('/cadastro', async (req, res) =>{
    const resultado = req.body
    const turma = await axios.post('http://localhost:8080/disciplinas/cadastro', resultado);

    if(!turma){
        res.json({erro: erro.message})
    }
    
    res.redirect('/disciplinas')
})

rotasDisciplinas.post('/atualizar/:idDisciplina', async (req, res)=>{
    const id = req.params.idDisciplina
    const informacoesAtualizadas = req.body
    await axios.put(`http://localhost:8080/disciplinas/atualizar/${id}`, informacoesAtualizadas);
    res.redirect('/disciplinas')
})

rotasDisciplinas.get('/deletar/:idDisciplina', async (req, res) => {
    const id = req.params.idDisciplina;
    await axios.delete(`http://localhost:8080/disciplinas/deletar/${id}`);
    res.redirect('/disciplinas')
})


module.exports = rotasDisciplinas;