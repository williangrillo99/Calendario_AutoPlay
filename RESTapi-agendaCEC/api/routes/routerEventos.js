const rotasEventos = require("express").Router();
const EventosController = require("../controllers/EventosController");

const SerializadorEvento = require("../Serializador").SerializadorEvento;

rotasEventos.get("/", async (req, res, prox) => {
  try {
    const eventos = await EventosController.listar();
    const serializador = new SerializadorEvento(res.getHeader("Content-Type"));
    res.status(200);
    res.send(serializador.serializar(eventos));
  } catch (error) {
      prox(error)
  }
});

rotasEventos.get("/:idEvento", async (req, res, prox) => {
  try {
    const idEvento = req.params.idEvento
    const evento = await EventosController.pegaEventoPorId(idEvento);
    const serializador = new SerializadorEvento(res.getHeader("Content-Type"));
    res.status(200);
    res.send(serializador.serializar(evento));
  } catch (error) {
      prox(error)
  }
});

rotasEventos.post("/cadastro", async (req, res, prox) => {
  try {
    const resultado = req.body;
    const eventos = await EventosController.criar(resultado);
    const serializador = new SerializadorEvento(res.getHeader("Content-Type"));
    res.status(200);
    res.send(serializador.serializar(eventos));
  } catch (error) {
    prox(error);
  }
});

rotasEventos.put('/atualizar/:idEvento', async (req, res, prox) => {
  try {
    const idEvento = req.params.idEvento
    const dados = req.body
    const infoEvento = Object.assign({}, {idEvento: idEvento}, dados)
    const evento = await EventosController.atualizarEvento(infoEvento)
    res.status(204)
    res.end()
  } catch (error) {
    prox(error)
  }
})

module.exports = rotasEventos;
