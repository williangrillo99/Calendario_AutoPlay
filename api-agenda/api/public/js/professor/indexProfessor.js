let modal = document.querySelector('.body')
let botaoAbrir = document.querySelector('.btn_adicionar_professor')
let form = document.querySelector('.form');


botaoAbrir.addEventListener('click', () =>{
    let form = document.querySelector('.form');
    form.reset()
    modal.style.display = 'flex';
    botaoAdiciona.value = "Adicionar"
    document.querySelector('.titulo').textContent = "Adicionar Professor"
})

//funções de fechar o modal
function fechar(){
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) fechar()
}


//funções de exibição do tostify
function notificaoErro(erro) {
    Toastify({
        text: erro,
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", // top or bottom
        position: "right", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#BB2020",
        }
    }).showToast();
  }
  
  function notificao(texto) {
    Toastify({
        text: texto,
        duration: 5000,
        destination: "http://localhost:3001/calendario",
        newWindow: true,
        close: true,
        gravity: "top", // top or bottom
        position: "right", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#00298E",
        }
    }).showToast();
  }