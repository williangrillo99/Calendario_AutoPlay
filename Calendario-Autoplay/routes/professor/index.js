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

module.exports = rotasProfessor 