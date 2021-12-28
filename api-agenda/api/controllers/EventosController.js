const modelos = require('../models')
const { Op } = require('sequelize');

//importando controllers
const ReservaController = require('./ReservaController')
const UsuarioController = require('./UsuarioController')
const TurmaController = require('./TurmaController')
const DisciplinaController = require('./DisciplinaController')

class EventosController{
    static async criar(infoEvento){
        try {
            //pega tuplas relativas
            const professor = await UsuarioController.pegaIdProfessor(infoEvento.id_usuario);
            const turma = await TurmaController.pegaIdTurma(infoEvento.id_turma);
            const disciplina = await DisciplinaController.pegaIdDisciplina(infoEvento.id_disciplina);


            const verificaProfessor = await modelos.eventos.findOne({
                where: {
                    [Op.and]: [
                        {data: infoEvento.data},
                        {id_usuario: infoEvento.id_usuario},
                        {
                            [Op.or]:[
                                {horario_inicio: {[Op.between]: [infoEvento.horario_inicio , infoEvento.horario_fim]}},
                                {horario_fim: {[Op.between]: [infoEvento.horario_inicio , infoEvento.horario_fim]}}     
                            ]
                        }
                      ]
                }
            })

            const verificaHorario = await modelos.eventos.findOne({
                where: {
                    [Op.and]: [
                        {data: infoEvento.data},
                        {id_local: infoEvento.id_local},
                        {
                            [Op.or]:[
                                {horario_inicio: {[Op.between]: [infoEvento.horario_inicio , infoEvento.horario_fim]}},
                                {horario_fim: {[Op.between]: [infoEvento.horario_inicio , infoEvento.horario_fim]}}     
                            ]
                        }
                      ]
                }
            })
            if(verificaHorario ){
                throw new Error('Está sala já está sendo usada neste horário')
            }
            if(verificaProfessor){
                throw new Error('Este professor está dando aula neste horário')
            }
            if(disciplina.pilar != professor.pilar){
                throw new Error(`${professor.nome} não pode dar aula de ${disciplina.name}`)
            }
            if(turma.pilar.pilar != professor.pilar){
                throw new Error(`${professor.nome} não pode dar para turma ${turma.nome}`)
            }

            //verifica se há referência
            let recorrencia = infoEvento.recorrencia;
            
            delete infoEvento.recorrencia;

            if(recorrencia){
                
                let dataRecorrencia = new Date(infoEvento.data)
                
                for(let i=0; i< recorrencia; i++){
                    let novoDia = dataRecorrencia.getDate()+1;
                    dataRecorrencia.setDate(novoDia)
                    
                    infoEvento.data = dataRecorrencia
                    
                    if(!(dataRecorrencia.getDay() === 0 || dataRecorrencia.getDay() === 6)){
                        await modelos.eventos.create(infoEvento)
                    }else{
                        i--;
                    }
                }
                return 'Eventos cadastrados!'

            }else{
                const evento = await modelos.eventos.create(infoEvento)
                return evento
            }

        }catch (error) {
            throw new Error(error.message)
        }
    }
    
    static async listar(data){
        const arrayEventos = []
        if(!data){
            data = new Date();
        }else{
            data = new Date(data)
            data.setDate(data.getDate()+1)
        } 

        try {
            const eventos = await modelos.eventos.findAll({
                where: {data: data},
                attributes: { exclude: ['id_local','id_turma','id_usuario', 'id_disciplina'] },
                include: [
                    {model: modelos.turmas, as: 'turma'},
                    {model: modelos.locais, as: 'local'},
                    {model: modelos.usuarios, as: 'usuario'},
                    {model: modelos.disciplinas, as: 'disciplina'},
                ],
                order: ['horario_inicio']
            })
            
            
            eventos.forEach(async (evento) => {
                let dataInicio = new Date(evento.data);
                let dataFormatada = dataInicio.toLocaleDateString('pt-BR', {timeZone: 'UTC'})

                let horarioInicio = evento.horario_inicio.substr(0,5);
                let horarioFim = evento.horario_fim.substr(0,5);

                
                const pilar = await modelos.pilares.findOne({
                    where: {id: evento.turma.id_pilar}
                })


                let reserva = new ReservaController({
                    cor: pilar.cor,
                    sala_id: evento.local.id,
                    turma: evento.turma.nome,
                    disciplina: evento.disciplina.name,
                    data: dataFormatada,
                    horario_inicio: horarioInicio,
                    horario_fim: horarioFim,
                    qtd_alunos: evento.turma.qtd_alunos,
                    professor: evento.usuario.abreviacao
                }) 
                arrayEventos.push(reserva)
            });

            return arrayEventos;
            
        } catch (error) {
            throw new Error(error.message)
        }
    }

    static dataFormatada(novaDate){
        if(!novaDate){
            novaDate = new Date();
        }else{
            novaDate = new Date(novaDate)
            novaDate.setDate(novaDate.getDate()+1)
        } 
        
        let now = novaDate;
        let dayName = new Array ("Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado");
        let monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");

        var dia = dayName[now.getDay()];
        var data = now.getDate();
        var mes = monName[now.getMonth()];
        var ano = now.getFullYear();

        return `${dia}, ${data} de ${mes} de ${ano}`
    }
}

module.exports = EventosController;