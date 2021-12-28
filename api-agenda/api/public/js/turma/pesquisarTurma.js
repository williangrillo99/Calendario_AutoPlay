let inputPesquisa = document.querySelector('.pesquisar-turmas')

inputPesquisa.addEventListener('input', ()=>{
    let turmas = document.querySelectorAll('.turma')
    let expressao = new RegExp(inputPesquisa.value, 'i')

    if(inputPesquisa.value.length > 0){
        turmas.forEach(turma => {
            let nomeTurma = turma.querySelector('.nome')
            console.log("Entrou")
            if(!expressao.test(nomeTurma.textContent)){
                console.log("Entrou2")
                professor.classList.add('removeTurma')
            }else{
                console.log("Entrou3")
                professor.classList.remove('removeTurma')
            }
        })
    }else{
        turmas.forEach(turma =>{
           turma.classList.remove('removeTurma')
        })
    }
})