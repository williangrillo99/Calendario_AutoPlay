let modal = document.querySelector('.body')
let botaoAbrir = document.querySelector('.btn_agenda_horario')

botaoAbrir.addEventListener('click', () =>{
    let form = document.querySelector('form');
    form.action = '/cadastro'

    modal.style.display = 'flex';
    document.querySelector('.titulo').textContent = "Reservar Sala"
    form.reset()
    
})

function fechar(){
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) fechar()
}