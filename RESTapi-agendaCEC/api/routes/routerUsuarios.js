const rotasUsuarios = require("express").Router();
const UsuarioController = require("../controllers/UsuarioController");
const { SerializadorProfessor } = require("../Serializador");

rotasUsuarios.get("/", async (req, res, prox) => {
  try {
    const usuarios = await UsuarioController.listar();

    const serializador = new SerializadorProfessor(
        res.getHeader('Content-Type')
    )
    res.send(
      serializador.serializar(usuarios)
    );
  } catch (error) {
      prox(error)
  }
});

rotasUsuarios.post("/cadastro", async (req, res, prox) => {
  try {
    const resultado = req.body;
    const usuario = await UsuarioController.criar(resultado);

    const serializador = new SerializadorProfessor(
        res.getHeader('Content-Type')
    )
    res.send(serializador.serializar(
        usuario
    ));
  } catch (error) {
      prox(error)
  }
});

rotasUsuarios.put("/atualizar/:idProfessor", async (req, res, prox) => {
  try {
    const id = req.params.idProfessor;
    const informacoesAtualizadas = req.body;
    const resposta = await UsuarioController.atualizar({
      ...informacoesAtualizadas,
      id: id,
    });
    res.status(204)
    res.end();
  } catch (error) {
      prox(error)
  }
});

rotasUsuarios.delete("/deletar/:idProfessor", async (req, res) => {
  const id = req.params.idProfessor;
  const resposta = await UsuarioController.deletar(id);
  res.json({ mensagem: `Professor ${resposta.nome} deletado com sucesso!` });
});

module.exports = rotasUsuarios;
