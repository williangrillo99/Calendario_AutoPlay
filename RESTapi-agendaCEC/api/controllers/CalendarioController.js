const modelos = require('../models')

class CalendarioController{
    constructor(title, start, end, color){
        this.title = title;
        this.start = start;
        this.end = end;
        this.color = color;
    }

    static async listar(){
        
        const arrayCalendario = []
        try {
            const eventos = await modelos.eventos.findAll({
                attributes: { exclude: ['id_local','id_turma','id_usuario', 'id_disciplina'] },
                include: [
                    {model: modelos.turmas, as: 'turma', include: {model: modelos.pilares, as: 'pilar'}},
                    {model: modelos.locais, as: 'local'},
                    {model: modelos.usuarios, as: 'usuario'},
                    {model: modelos.disciplinas, as: 'disciplina'},
                ]
            })
            
            eventos.forEach(async (evento) => {
                let horarioInicio = evento.data + "T" +evento.horario_inicio;
                let horarioFim = evento.data + "T" +evento.horario_fim;
                
                let eventoCalendario = {}
                if(evento.titulo_evento === 'Evento'){
                    eventoCalendario = {
                        color: '#00FF00',
                        local: evento.local.nome,
                        title: evento.titulo_evento,
                        qtd_pessoas: evento.local.capacidade,
                        start: horarioInicio,
                        end: horarioFim,
                        responsavel: evento.usuario.nome
                    };
                }else{
                    eventoCalendario = {
                        title: evento.turma.nome,
                        start: horarioInicio,
                        end: horarioFim,
                        color: evento.turma.pilar.cor,
                        responsavel: evento.usuario.nome,
                        local: evento.local.nome,
                        disciplina: evento.disciplina.name
                    }
                }
                
                arrayCalendario.push(eventoCalendario)
            });
            
            return arrayCalendario;

        } catch (error) {
            throw new Error(error.message)
        }
    }


}

module.exports = CalendarioController;