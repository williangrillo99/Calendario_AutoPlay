let inputPesquisa = document.querySelector('.pesquisar-disciplina');

inputPesquisa.addEventListener('input', ()=>{
    let disciplinas = document.querySelectorAll('.disciplina')
    let expressao = new RegExp(inputPesquisa.value, 'i')
    console.log("ENTROU")
    if(inputPesquisa.value.length > 0){
        disciplinas.forEach(disciplina => {
            let nomeDisciplina = disciplina.querySelector('.nome')
            console.log(nomeDisciplina.textContent);
            console.log(expressao);
            if(!expressao.test(nomeDisciplina.textContent)){
                disciplina.classList.add('removeDisciplina')
                console.log("ENTROU 2")
            }else{
                disciplina.classList.remove('removeDisciplina')
                console.log("ENTROU 3")
            }
        })
    }else{
        disciplinas.forEach(disciplina =>{
            disciplina.classList.remove('removeDisciplina')
        })
    }
})