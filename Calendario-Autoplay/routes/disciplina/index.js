const rotasDisciplina = require('express').Router()

rotasDisciplina.get('/', (req, res) => {
    res.render('../views/disciplina', {
        title: 'Disciplinas'
    })
})

module.exports = rotasDisciplina 