const modelos = require("../models");
const { QueryTypes } = require("sequelize");

//importando controllers
const UsuarioController = require("./UsuarioController");
const TurmaController = require("./TurmaController");
const DisciplinaController = require("./DisciplinaController");

const OcupadoError = require("../errors/OcupadoError");
const CampoInvalido = require("../errors/CampoInvalido");

class EventosController {
  static validarCampos(dadosEvento) {
    
    switch(dadosEvento.titulo_evento){
      case 'Aula':
        if (
          typeof dadosEvento.id_turma !== "string" ||
          dadosEvento.id_turma.length === 0
        ) {
          throw new CampoInvalido("turma");
        }
        if (
          typeof dadosEvento.id_disciplina !== "string" ||
          dadosEvento.id_disciplina.length === 0
        ) {
          throw new CampoInvalido("disciplina");
        }
        break;
      default:
        dadosEvento.id_turma = null
        dadosEvento.id_disciplina = null
        if (
          dadosEvento.dsc_evento.length === 0 ||
          dadosEvento.dsc_evento.length > 50
        ) {
          throw new CampoInvalido("descrição do evento");
        }
    }
    if (
      typeof dadosEvento.id_usuario !== "string" ||
      dadosEvento.id_usuario.length === 0
    ) {
      console.log(typeof dadosEvento.id_usuario );
      throw new CampoInvalido("responsável");
    }
    if (
      typeof dadosEvento.id_local !== "string" ||
      dadosEvento.id_local.length === 0
    ) {
      throw new CampoInvalido("local");
    }
    if (
      typeof dadosEvento.data !== "string" ||
      dadosEvento.data.length === 0
    ) {
      throw new CampoInvalido("data");
    }
  }

  static async validaDisponibilidade(infoEvento){

    if(!infoEvento.idEvento){
      infoEvento.idEvento = 0;
    }

    if(infoEvento.titulo_evento === 'Aula'){
      const professor = await UsuarioController.pegaIdProfessor(
        infoEvento.id_usuario
      );
      const turma = await TurmaController.pegaIdTurma(infoEvento.id_turma);
      const disciplina = await DisciplinaController.pegaIdDisciplina(
        infoEvento.id_disciplina
      );

      //inserindo o nome da turma da dsc do evento, caso seja aula
      infoEvento.dsc_evento = turma.nome

      if (
        await EventosController.validaEvento(
          infoEvento.idEvento,
          infoEvento.data,
          infoEvento.id_turma,
          "id_turma",
          infoEvento.horario_inicio,
          infoEvento.horario_fim
        )
      ) {
        throw new OcupadoError("Esta turma está tendo aula neste horário");
      }
      if (disciplina.pilar != professor.pilar) {
        throw new OcupadoError(
          `${professor.nome} não pode dar aula de ${disciplina.name}`
        );
      }
      if (turma.pilar.pilar != professor.pilar) {
        throw new OcupadoError(
          `${professor.nome} não pode dar para turma ${turma.nome}`
        );
      }
    }

    if (
      await EventosController.validaEvento(
        infoEvento.idEvento,
        infoEvento.data,
        infoEvento.id_local,
        "id_local",
        infoEvento.horario_inicio,
        infoEvento.horario_fim
      )
    ) {
      throw new OcupadoError("Está sala já está sendo usada neste horário");
    }
    if (
      await EventosController.validaEvento(
        infoEvento.idEvento,
        infoEvento.data,
        infoEvento.id_usuario,
        "id_usuario",
        infoEvento.horario_inicio,
        infoEvento.horario_fim
      )
    ) {
      throw new OcupadoError("Este professor está dando aula neste horário");
    }
  }

  static async criar(infoEvento) {
    this.validarCampos(infoEvento);
    await this.validaDisponibilidade(infoEvento);

    //verifica se há referência
    let recorrencia = infoEvento.recorrencia;
    delete infoEvento.recorrencia;

    if (recorrencia) {
      let dataRecorrencia = new Date(infoEvento.data);

      for (let i = 0; i < recorrencia; i++) {
        let novoDia = dataRecorrencia.getDate() + 1;
        dataRecorrencia.setDate(novoDia);

        infoEvento.data = dataRecorrencia;

        if (
          !(dataRecorrencia.getDay() === 0 || dataRecorrencia.getDay() === 6)
        ) {
          await modelos.eventos.create(infoEvento);
        } else {
          i--;
        }
      }
      return "Eventos cadastrados!";
    } else {
      const evento = await modelos.eventos.create(infoEvento);
      return evento;
    }
  }

  static async listar() {
    const arrayEventos = [];

    try {
      const eventos = await modelos.eventos.findAll({
        attributes: {
          exclude: ["id_local", "id_turma", "id_usuario", "id_disciplina"],
        },
        include: [
          {
            model: modelos.turmas,
            as: "turma",
            include: { model: modelos.pilares, as: "pilar" },
          },
          { model: modelos.locais, as: "local" },
          { model: modelos.usuarios, as: "usuario" },
          { model: modelos.disciplinas, as: "disciplina" },
        ],
        order: ["horario_inicio"],
      });

      eventos.forEach(async (evento) => {
        let dataInicio = new Date(evento.data);
        let dataFormatada = dataInicio.toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        });

        let horarioInicio = evento.horario_inicio.substr(0, 5);
        let horarioFim = evento.horario_fim.substr(0, 5);

        let reserva;
        if(evento.titulo_evento === 'Evento'){
          reserva = {
            id: evento.id,
            cor: '#00FF00',
            sala_id: evento.local.id,
            titulo_evento: evento.titulo_evento,
            dsc_evento: evento.dsc_evento,
            data: dataFormatada,
            qtd_pessoas: evento.local.capacidade,
            horario_inicio: horarioInicio,
            horario_fim: horarioFim,
            professor: evento.usuario.abreviacao,
          };
        }else{
          reserva = {
            id: evento.id,
            cor: evento.turma.pilar.cor,
            sala_id: evento.local.id,
            titulo_evento: evento.turma.nome,
            disciplina: evento.disciplina.name,
            data: dataFormatada,
            horario_inicio: horarioInicio,
            horario_fim: horarioFim,
            qtd_pessoas: evento.turma.qtd_alunos,
            professor: evento.usuario.abreviacao,
          };
        }
        
        arrayEventos.push(reserva);
      });

      return arrayEventos;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async atualizarEvento(infoEvento){
    this.validarCampos(infoEvento);
    await this.validaDisponibilidade(infoEvento);

    const evento = await modelos.eventos.update(
      infoEvento,
      {
        where: {id: infoEvento.idEvento}
      }
    )
    return evento
  }

  static async pegaEventoPorId(id){
    const eventos = await modelos.eventos.findOne({
      where: {id: id},
      attributes: {
        exclude: ["id_local", "id_turma", "id_usuario", "id_disciplina"],
      },
      include: [
        {
          model: modelos.turmas,
          as: "turma",
          include: { model: modelos.pilares, as: "pilar" },
        },
        { model: modelos.locais, as: "local" },
        { model: modelos.usuarios, as: "usuario" },
        { model: modelos.disciplinas, as: "disciplina" }, 
      ]
    })

    return eventos;
  }

  static dataFormatada(novaDate) {
    if (!novaDate) {
      novaDate = new Date();
    } else {
      novaDate = new Date(novaDate);
      novaDate.setDate(novaDate.getDate() + 1);
    }

    let now = novaDate;
    let dayName = new Array(
      "Domingo",
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sábado"
    );
    let monName = new Array(
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    );

    var dia = dayName[now.getDay()];
    var data = now.getDate();
    var mes = monName[now.getMonth()];
    var ano = now.getFullYear();

    return `${dia}, ${data} de ${mes} de ${ano}`;
  }

  static async validaEvento(
    idEvento=0,
    data,
    idVerificador,
    nomeColuna,
    horario_inicio,
    horario_fim
  ) {
    const verifica = await modelos.sequelize.query(
      `SELECT id,titulo_evento, dsc_evento, data,horario_inicio, horario_fim, id_disciplina, id_usuario, id_local, id_turma FROM eventos AS eventos WHERE (id <> ${idEvento}) AND (eventos.data = ? AND eventos.${nomeColuna} = ?) AND (( ? BETWEEN eventos.horario_inicio AND eventos.horario_fim) OR ( ? BETWEEN eventos.horario_inicio AND eventos.horario_fim) OR ( eventos.horario_inicio BETWEEN ? AND ?) OR (  eventos.horario_fim BETWEEN ? AND ?)) LIMIT 1;`,
      {
        replacements: [
          data,
          idVerificador,
          horario_inicio,
          horario_fim,
          horario_inicio,
          horario_fim,
          horario_inicio,
          horario_fim,
        ],
        type: QueryTypes.SELECT,
      }
    );
    return verifica.length != 0;
  }
}

// SELECT id,titulo_evento, dsc_evento, data,horario_inicio, horario_fim, id_disciplina, id_usuario, id_local, id_turma FROM eventos AS eventos WHERE id <> 3 AND ("eventos".data = '2022-01-23' AND "eventos".id_local = '1') AND (( '09:00:00' BETWEEN "eventos".horario_inicio AND "eventos".horario_fim) OR ('12:00:00' BETWEEN "eventos".horario_inicio AND "eventos".horario_fim) OR ( "eventos".horario_inicio BETWEEN '09:00:00' AND '12:00:00') OR ( "eventos".horario_fim BETWEEN '09:00:00' AND '12:00:00')) LIMIT 1;

module.exports = EventosController;
