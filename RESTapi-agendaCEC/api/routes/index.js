const bodyParser = require("body-parser");
const cors = require("cors");

const formatosAceitos = require("../Serializador").formatosAceitos;
const SerializadorErro = require('../Serializador').SerializadorErro

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());

  app.use((req, res, prox) => {
    res.setHeader('Content-Type', 'application/json')
    prox()
  })
  const rotasUsuarios = require("./routerUsuarios");
  app.use("/professores", rotasUsuarios);

  const rotasAreas = require("./routerAreas");
  app.use("/areas", rotasAreas);

  const rotasTurmas = require("./routerTurmas");
  app.use("/turmas", rotasTurmas);

  const rotasDisciplinas = require("./routerDisciplinas");
  app.use("/disciplinas", rotasDisciplinas);

  const rotaCalendario = require("./routerCalendario");
  app.use("/calendario", rotaCalendario);

  const rotasEventos = require("./routerEventos");
  app.use("/eventos", rotasEventos);

  const rotasPilares = require("./routerPilares");
  app.use("/pilares", rotasPilares);

  app.use((erro, req, res, prox) => {
      let status = 500;

      if(erro.name == 'CampoInvalido' || erro.name == 'EmailExistente'){
        status = 400
      }
      if(erro.name == 'NaoEncontrado'){
        status = 404
      }
      if(erro.name == 'OcupadoError'){
        status = 409
      }

      const serializador = new SerializadorErro(
          res.getHeader('Content-Type')
      )
      res.status(status)
      res.send(
          serializador.serializar({
              mensagem: erro.message,
              id: erro.idErro
          })
      )
  })
};
