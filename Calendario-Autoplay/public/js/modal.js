let modal = document.querySelector('.body')

function cadastrar(){
    modal.style.display = 'flex';
}
function fechar(){
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) fechar()
}