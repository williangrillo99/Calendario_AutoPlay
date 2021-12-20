let modal = document.querySelector('.body')
let botaoAbrir = document.querySelector('.btn_adicionar_professor')

botaoAbrir.addEventListener('click', () =>{
    let form = document.querySelector('.form');
    form.action = '/professores/cadastro'

    modal.style.display = 'flex';
    document.querySelector('.titulo').textContent = "Adicionar Professor"
    
    form.nome.value = ""
    form.email.value = ""
    form.abreviacao.value = ""
    document.querySelector('.titulo').textContent = "Adicionar Professor"
})

function fechar(){
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) fechar()
}