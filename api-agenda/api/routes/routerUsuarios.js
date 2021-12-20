const rotasUsuarios = require('express').Router()
const UsuarioController = require('../controllers/UsuarioController')

rotasUsuarios.get('/', async(req, res) => {
    const usuarios = await UsuarioController.listar()

    if(!usuarios){
        res.json({erro: erro.message})
    }
   res.render('../api/views/professor', {
        title: 'Professores',
        professores: usuarios
    })
})

rotasUsuarios.post('/cadastro', async (req, res) => {
    const resultado = req.body
    const usuario = await UsuarioController.criar(resultado)
    res.redirect('/professores')
})

rotasUsuarios.post('/atualizar/:idProfessor', async (req, res)=>{
    const id = req.params.idProfessor
    const informacoesAtualizadas = req.body
    await UsuarioController.atualizar({...informacoesAtualizadas, id:id})
    res.redirect('/professores')
})

rotasUsuarios.get('/deletar/:idProfessor', async (req, res) => {
    const id = req.params.idProfessor;
    await UsuarioController.deletar(id);
    res.redirect('/professores')
})

module.exports = rotasUsuarios 