let form = document.querySelector('form')
let btnEnvia =  document.querySelector('#botaoConcluir')

let pilarSelecionado = form.querySelector('#pilar')
let categoriaSelecionada = form.querySelector('#categoria')

pilarSelecionado.addEventListener('change', () =>{
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `http://localhost:3001/pilares/${pilarSelecionado.value}`)

    xhr.addEventListener('load', ()=>{
        categoriaSelecionada.textContent =''
        categoriaSelecionada.disabled = false
        
        let categorias = JSON.parse(xhr.responseText)
        
        categorias.forEach(categoria =>{
            let option = document.createElement('option')
            option.value = categoria.id
            option.textContent = categoria.categoria
            categoriaSelecionada.append(option)
        })

    })

    xhr.send()
    
})


btnEnvia.addEventListener('click', event =>{
    event.preventDefault()

    let turma = {
        nome: form.nome.value,
        ano: form.ano.value,
        qtd_alunos: form.qtd_alunos.value,
        id_pilar: form.id_pilar.value
    }

    let mensagensErro = document.querySelector('.mensagem')
    let erros = validaFormulario(turma);

    if(erros.length > 0){
        exibeErro(erros, mensagensErro);
        return;
    }


    form.submit();
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


function buscaCategorias(pilar){
    

}