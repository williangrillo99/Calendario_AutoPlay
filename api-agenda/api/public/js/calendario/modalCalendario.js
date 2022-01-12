let modal = document.querySelector('#visualizar')

function fechar(){
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) fechar()
}