let form = document.querySelector('.form')
let botaoAdiciona = document.querySelector('#botaoConcluir')

botaoAdiciona.addEventListener('click', (event) => {
    event.preventDefault();
    
    let professor = {
        nome: form.nome.value,
        pilar: form.pilar.value,
        email: form.email.value,
        abreviacao: form.abreviacao.value,
        disponibilidade: form.disponibilidade.value
    }

    let mensagensErro = document.querySelector('.mensagem')
    let erros = validaFormulario(professor);

    if(erros.length > 0){
        exibeErro(erros, mensagensErro);
        return;
    }

    botaoAdiciona.addEventListener('click', ()=>{
      let teste = form.submit();
      console.log(teste);
    })



    
})


function exibeErro(erros, divErro) {
    //verificar erro
    divErro.classList.add('removeErro')
    divErro.innerHTML = "";
    
    erros.forEach((erro) => {
      let itemLista = document.createElement("li");
      itemLista.innerHTML = erro;
      divErro.append(itemLista);
  
      setTimeout(() =>{
        divErro.innerHTML = "";
        divErro.style.display = ''
        divErro.classList.remove('removeErro')
      }, 3000)
  
    });
  }