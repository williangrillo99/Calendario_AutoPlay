const tabelaProfessor = require('./TabelaProfessor')

class Professor{
    constructor({id, nome, email, pilar, abreviacao, disponibilidade}){
        this._id = id;
        this._nome = nome,
        this._email = email,
        this._pilar = pilar,
        this._abreviacao = abreviacao,
        this._disponibilidade = disponibilidade
    }


    async criar(){
        const professor = await tabelaProfessor.create({
            nome: this._nome,
            email: this._email,
            pilar: this._pilar,
            abreviacao: this._abreviacao,
            disponibilidade: this._disponibilidade
        })
        this._id = professor.id
    }
    
    static async listar(){
        return await tabelaProfessor.findAll()
    }

    async atualizar(){
        return await tabelaProfessor.update(
            {
                nome: this._nome,
                email: this._email,
                pilar: this._pilar,
                abreviacao: this._abreviacao,
                disponibilidade: this._disponibilidade
            },
            {
                where: {id: this._id}
            }
        ) 
    }
    async deletar(){
        return await tabelaProfessor.destroy(
            {
                where: {id:this._id}
            }
        )
    }

}

module.exports = Professor