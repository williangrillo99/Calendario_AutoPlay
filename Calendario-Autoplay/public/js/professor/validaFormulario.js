function validaFormulario(professor){

    let erros = []

    let tamanhoNome = professor.nome.length;
    if(tamanhoNome <= 0 || tamanhoNome >50 ){
        erros.push('Nome inválido!')
    }
    if(!validaAbreviacao(professor.abreviacao.length)){
        erros.push('Abreviação inválida!')
    }
    if(!validaEmail(professor.email.length)){
        erros.push('Email inválido!')
    }
    return erros;
    
}

function validaAbreviacao(abreviacao){
    if(abreviacao > 0 && abreviacao <= 10){
        return true;
    }
}

function validaEmail(email){
    if(email > 0 && email < 150){
        return true
    }
}

