const rotasUsuarios = require('express').Router()
const axios = require('axios')

rotasUsuarios.get('/', async(req, res) => {
    const usuarios = await axios.get('http://localhost:8080/professores')

    if(!usuarios.data){
        res.json({erro: "Não há professores cadastrados!"})
    }
   res.render('../api/views/professor', {
        title: 'Professores',
        professores: usuarios.data
    })
})

rotasUsuarios.post('/cadastro', async (req, res) => {
    const resultado = req.body
    const usuarios = await axios.post('http://localhost:8080/professores/cadastro', resultado)
    res.redirect('/professores')
})

rotasUsuarios.post('/atualizar/:idProfessor', async (req, res)=>{
    const id = req.params.idProfessor
    const informacoesAtualizadas = req.body
    await axios.put(`http://localhost:8080/professores/atualizar/${id}`, informacoesAtualizadas)
    res.redirect('/professores')
})

rotasUsuarios.get('/deletar/:idProfessor', async (req, res) => {
    const id = req.params.idProfessor;
    await axios.delete(`http://localhost:8080/professores/deletar/${id}`)
    res.redirect('/professores')
})

module.exports = rotasUsuarios 