let inputPesquisa = document.querySelector('.pesquisar-professor')

inputPesquisa.addEventListener('input', ()=>{
    let professores = document.querySelectorAll('.professor')
    let expressao = new RegExp(inputPesquisa.value, 'i')

    if(inputPesquisa.value.length > 0){
        professores.forEach(professor => {
            let nomeProfessor = professor.querySelector('.nome')
          
            if(!expressao.test(nomeProfessor.textContent)){
                professor.classList.add('removeProfessor')
            }else{
                professor.classList.remove('removeProfessor')
            }
        })
    }else{
        professores.forEach(professor =>{
            professor.classList.remove('removeProfessor')
        })
    }
})