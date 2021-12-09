const tabelaArea = require('./tablelaArea')

class Area{
    constructor({id, nome, capacidade, sistemas, descricao}){
        this._id = id;
        this._nome = nome;
        this._capacidade = capacidade;
        this._sistemas = sistemas;
        this._descricacao = descricao;
    }

    async criar(){
        const criado = await tabelaArea.create({
            nome: this._nome,
            capacidade:this._capacidade,
            sistemas: this._sistemas,
            descricao: this._descricacao
        })
        this._id = criado.id;
        
    }

    static async listar(){
        const areas = await tabelaArea.findAll()
        areas.forEach(area => {
            if(!area.sistemas){
                area.sistemas = "Não possui sistemas"
            }else{
                area.sistemas = "Possui sistemas"
            }
        })
        return areas
    }

    atualizar(){}
    deletar(){}
}

module.exports = Area; 