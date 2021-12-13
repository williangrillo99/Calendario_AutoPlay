const tabelaProfessor = require('../routes/professor/TabelaProfessor')
const tabelaArea = require('../routes/areas/tablelaArea')
const tabelaDisciplina = require('../routes/disciplina/tabelaDisciplina')

tabelaProfessor
    .sync({force: false})
    .then(() => console.log('Tabela Professor criada com sucesso!'))
    .catch(err => console.log(err))

tabelaArea
    .sync({force: false})
    .then(() => console.log("Tabela Area criada com sucesso!"))
    .catch(err => console.log(err))

tabelaDisciplina
    .sync({force: false})
    .then(() => console.log("Tabela Disciplina criada com sucesso!"))
    .catch(err => console.log(err))

