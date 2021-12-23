let modal = document.querySelector('.body')
let botaoAbrir = document.querySelector('.btn_adicionar_sala')

botaoAbrir.addEventListener('click', () =>{
    let form = document.querySelector('form');
    form.action = '/sala/cadastro'

    modal.style.display = 'flex';
    document.querySelector('.titulo').textContent = "Adicionar Sala"
    form.reset()
    
})

function fechar(){
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) fechar()
}