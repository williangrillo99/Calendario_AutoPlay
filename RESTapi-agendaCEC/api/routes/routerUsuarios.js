const rotasUsuarios = require('express').Router()
const UsuarioController = require('../controllers/UsuarioController')

rotasUsuarios.get('/', async(req, res) => {
    const usuarios = await UsuarioController.listar()

    if(!usuarios){
        res.json({erro: erro.message})
    }
   res.json(usuarios)
})

rotasUsuarios.post('/cadastro', async (req, res) => {
    const resultado = req.body
    const usuario = await UsuarioController.criar(resultado)
    res.json(usuario)
})

rotasUsuarios.put('/atualizar/:idProfessor', async (req, res)=>{
    const id = req.params.idProfessor
    const informacoesAtualizadas = req.body
    const resposta = await UsuarioController.atualizar({...informacoesAtualizadas, id:id})
    res.json(resposta)
})

rotasUsuarios.delete('/deletar/:idProfessor', async (req, res) => {
    const id = req.params.idProfessor;
    const resposta = await UsuarioController.deletar(id);
    res.json({mensagem: `Professor ${resposta.nome} deletado com sucesso!`})
})

module.exports = rotasUsuarios 