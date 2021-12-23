class ReservaController{
    constructor({sala_id, turma,disciplina,data,horario_inicio,horario_fim,professor, qtd_alunos,cor}){
        this.sala_id = sala_id;
        this.turma = turma;
        this.disciplina = disciplina;
        this.data = data;
        this.horario_inicio = horario_inicio;
        this.horario_fim = horario_fim;
        this.professor = professor;
        this.qtd_alunos = qtd_alunos;
        this.cor = cor
    }


}

module.exports = ReservaController;