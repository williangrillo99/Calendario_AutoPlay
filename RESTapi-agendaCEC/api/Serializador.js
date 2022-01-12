const FormatoNaoSuportado = require("./errors/FormatoNaoSuportado");


//exemplifica uma classe abstrata
class Serializador{
    //pega os dados recebidos e retorna um JSON formatado
    json(dados){
        return JSON.stringify(dados)
    }
    
    //caso necessario seja verifica formato aceito pela API
    serializar(dados){
        return this.json(dados)
    }

    //filtro os dados dos campos para que retornem somente os campos necessarios
    filtraCamposObjetos(dados){
        const objetoFormatado = {}

        this.camposPublicos.forEach(campo => {
            if(dados.hasOwnProperty(campo) ){
                objetoFormatado[campo] = dados[campo]
            }
        })

        return objetoFormatado;
    }

    //verifica se o tipe de dados é um array ou somento um objeto para fazer o tratamento dos campos de acordo com o medoto filtraCamposObjetos
    filtraDados(dados){
        if(Array.isArray(dados)){
            dados = dados.map(item => {
                return this.filtraCamposObjetos(item)
            })
        }else{
            dados = this.filtraCamposObjetos(dados)
        }

        return dados
    }
}

class SerializadorProfessor extends Serializador{
    constructor(contentType, camposExtras){
        super();
        this.contentType = contentType;
        this.camposPublicos = ['id', 'nome', 'email', 'abreviacao', 'pilar', 'disponibilidade'].concat(camposExtras || [])
    }
}

class SerializadorErro extends Serializador{
    constructor(contentType, camposExtras){
        super();
        this.contentType = contentType
        this.camposPublicos = ['id', 'mensagem'].concat(camposExtras || [])
        this.tagSingular = 'erro'
    }
}

module.exports = {
    Serializador,
    SerializadorProfessor,
    SerializadorErro,
    formatosAceitos: ['application/json', '*/*', 'text/html']
}