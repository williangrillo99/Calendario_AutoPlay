const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()

routes(app)
app.use(express.static(path.join(__dirname, '../api/public')))

app.listen(8080, () => console.log('Servidor rodando na porta 8080!'))

module.exports = app;