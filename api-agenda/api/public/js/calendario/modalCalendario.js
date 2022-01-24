let modal = document.querySelector('#visualizar')

function fechar(){ //Criando função para fechar o modal
    modal.style.display = 'none';
}

window.onclick = function(event) { // Função para dar à função acima um uso 
    if (event.target == modal) fechar()
}