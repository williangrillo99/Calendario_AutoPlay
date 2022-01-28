const modelos = require('../models')
const { Op } = require('sequelize');
const UsuarioController = require("./UsuarioController");
const DisciplinaController = require("./DisciplinaController")
const TurmaController = require("./TurmaController");
const AreasController = require("./AreasController");
const EventosController = require("./EventosController");

class RelatorioController{

    // static = Acessar um metodo sem precisar instaciar a classe
    static async calcular(){
        const Disciplinas = await DisciplinaController.listar()
        const quantDisciplina = Disciplinas.length

        const Professores = await UsuarioController.listar()
       
        const quantProfessor = Professores.length

        const Turmas = await TurmaController.listar()
        const quantTurmas = Turmas.length

        const Areas = await AreasController.listar()
        const quantAreas = Areas.length

        const Eventos = await EventosController.listar()
        const quantEventos = Eventos.length

        const quantidades = [
            {Nome:"Areas",
            Quantidade:quantAreas},
            {Nome:"Disciplinas",
            Quantidade:quantDisciplina},
            {Nome:"Eventos",
            Quantidade:quantEventos},
            {Nome:"Professores",
            Quantidade:quantProfessor},
            {Nome:"Turmas",
            Quantidade:quantTurmas},
        ]
        return quantidades;
    }  

} 

module.exports = RelatorioController;