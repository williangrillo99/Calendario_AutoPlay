class EmailExistente extends Error{
    constructor(){
        super('Email já existe')
        this.name = 'EmailExistente'
        this.idErro = 1
    }
}

module.exports = EmailExistente