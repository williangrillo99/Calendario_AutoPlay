class OcupadoError extends Error{
    constructor(mensagem){
        super(mensagem);
        this.name= 'OcupadoError'
        this.idErro = 4
    }
}

module.exports = OcupadoError