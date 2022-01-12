class FormatoNaoSuportado extends Error{
    constructor(contentType){
        super(`O formato ${contentType} não é suportado pela API`);
        this.name = 'FormatoNaoSuportado'
        this.idErro = 3
    }
}

module.exports = FormatoNaoSuportado;