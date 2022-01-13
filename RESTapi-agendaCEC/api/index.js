const express = require('express')
const routes = require('./routes')
const app = express()

routes(app)

app.listen(8080, () => console.log('Servidor rodando na porta 8080!'))

module.exports = app;