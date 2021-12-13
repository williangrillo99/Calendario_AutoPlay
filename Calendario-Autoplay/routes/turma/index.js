const rotasTurma = require('express').Router()

rotasTurma.get('/', (req, res) => {
    res.render('../views/turmas', {
        title: 'Turmas'
    })
})

module.exports = rotasTurma 