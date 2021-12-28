let inputPesquisa = document.querySelector('.pesquisar-turmas')

inputPesquisa.addEventListener('input', ()=>{
    let turmas = document.querySelectorAll('.turma')
    let expressao = new RegExp(inputPesquisa.value, 'i')

    if(inputPesquisa.value.length > 0){
        turmas.forEach(turma => {
            let nomeTurma = turma.querySelector('.nome')
            
            if(!expressao.test(nomeTurma.textContent)){
               
                turma.classList.add('removeTurma')
            }else{
                
               turma.classList.remove('removeTurma')
            }
        })
    }else{
        turmas.forEach(turma =>{
           turma.classList.remove('removeTurma')
        })
    }
})