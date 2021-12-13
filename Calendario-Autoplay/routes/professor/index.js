const rotasProfessor = require('express').Router()
const Professor = require('./Professor')

rotasProfessor.get('/', async(req, res) => {
    const professores = await Professor.listar()
    // console.log(professores);
        res.render('../views/professor', {
            title: 'Professores',
            professores: professores
        })
})

rotasProfessor.post('/cadastro', async (req, res) => {
    const resultado = req.body
    const professor = new Professor(resultado)
    await professor.criar()
    res.redirect('/professor')
})

rotasProfessor.post('/atualizar/:idProfessor', async (req, res)=>{
    const id = req.params.idProfessor
    const informacoesAtualizadas = req.body
    const dados = Object.assign(informacoesAtualizadas, {id:id})
    const professor = new Professor(dados)
    await professor.atualizar()
    res.redirect('/professor')
})

rotasProfessor.get('/deletar/:idProfessor', async (req, res) => {
    const id = req.params.idProfessor;
    const professor = new Professor({id:id})
    await professor.deletar();
    res.redirect('/professor')
})

module.exports = rotasProfessor 