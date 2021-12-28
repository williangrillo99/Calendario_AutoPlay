function validaFormulario(disciplina){

    let erros = []

    let tamanhoNome = disciplina.nome.length;
    if(tamanhoNome <= 0 || tamanhoNome >50 ){
        erros.push('Nome disciplina inválido!')
    }
    if(!disciplina.horas || disciplina.horas < 10){
        erros.push('Horas inválida!')
    }
    if(!disciplina.pilar){
        erros.push('Pilar inválido!')
    }
    if(disciplina.descricao > 250){
        erros.push('Descricão inválido!')
    }
    return erros;
    
}

