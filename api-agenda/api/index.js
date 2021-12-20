const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()

routes(app);
app.use(express.static(path.join(__dirname, '../api/public')))

app.listen(3001, () => console.log('Servidor rodando na porta 3001!'))

module.exports = app;
