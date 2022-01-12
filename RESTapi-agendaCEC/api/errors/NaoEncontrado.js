class NaoEncontrado extends Error{
    constructor(mensagem){
        super(mensagem)
        this.name = 'NaoEncontrado'
        this.idErro = 2
    }
}

module.exports = NaoEncontrado;