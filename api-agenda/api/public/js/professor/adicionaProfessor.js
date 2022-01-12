let form = document.querySelector('.form')
let botaoAdiciona = document.querySelector('#botaoConcluir')

botaoAdiciona.addEventListener('click', async (event) => {
    event.preventDefault();
    
    let professor = {
        nome: form.nome.value,
        pilar: form.pilar.value,
        email: form.email.value,
        abreviacao: form.abreviacao.value,
        disponibilidade: form.disponibilidade.value
    }

    await axios.post('http://localhost:8080/professores/cadastro', professor
    ).then((item) => {
        notificao("Professor Adicionado com sucesso!")
        window.location.href = `http://localhost:3001/professores`
    }).catch((error) => {
        const erros = error.response.data.mensagem
        console.log(erros);
        notificaoErro(erros)
  
    })
    
})


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