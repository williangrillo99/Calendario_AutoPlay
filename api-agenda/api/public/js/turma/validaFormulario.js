function validaFormulario(turma){

    let erros = []

    let tamanhoNome = turma.nome.length;
    if(tamanhoNome <= 0 || tamanhoNome >50 ){
        erros.push('Nome turma inválido!')
    }
    if(!turma.ano || turma.ano < 2015){
        erros.push('Ano inválida!')
    }
    if(!turma.qtd_alunos || turma.qtd_alunos < 5){
        erros.push('N°Alunos inválido!')
    }
    if(!turma.id_pilar){
        console.log(turma.id_pilar);
        erros.push('Categoria inválido!')
    }
    return erros;
    
}

