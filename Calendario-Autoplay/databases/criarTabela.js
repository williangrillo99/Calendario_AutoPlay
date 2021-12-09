const tabelaProfessor = require('../routes/professor/TabelaProfessor')
const tabelaArea = require('../routes/areas/tablelaArea')

tabelaProfessor
    .sync({force: false})
    .then(() => console.log('Tabela Professor criada com sucesso!'))
    .catch(err => console.log(err))

tabelaArea
    .sync({force: false})
    .then(() => console.log("Tabela area criada com sucesso!"))
    .catch(err => console.log(err))

