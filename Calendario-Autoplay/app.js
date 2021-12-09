const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public'))) //cria uma pasta global public para arquivos estaticos
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//consumindo rotas de disciplina
const rotasDisciplina = require('./routes/disciplina/index')
app.use('/disciplina', rotasDisciplina)

//consumindo rotas de turma
const rotasTurma = require('./routes/turma/index')
app.use('/turmas', rotasTurma)

//consumindo rotas de areas
const rotasAreas = require('./routes/areas/index')
app.use('/areas', rotasAreas)

//consumindo rotas de professor
const rotasProfessor = require('./routes/professor/index')
app.use('/professor', rotasProfessor)

//rota tela inicial
app.get('/', (req, res) => {
    res.render('../views/index')
})

app.listen('3000', console.log('Servidor rodando na porta 3000'))