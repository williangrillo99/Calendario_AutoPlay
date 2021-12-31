const checkbox = document.querySelector('#verificaRecorrencia')
const inputRecorrencia = document.querySelector('#recorrencia')


checkbox.addEventListener('change', () =>{
    if(checkbox.checked){
        inputRecorrencia.readOnly = false
    }else{
        inputRecorrencia.readOnly = true
        inputRecorrencia.value = ''
    }
})

//input data
const formData = document.querySelector('.form-data')

formData.data.addEventListener('input', ()=>{
    formData.submit();
})


let form = document.querySelector('.form-evento')

document.querySelector('#botaoConcluir').addEventListener('click', async event => {
    event.preventDefault();

    const evento = {
        dsc_evento: form.dsc_evento.value,
        data: form.data.value,
        horario_inicio: form.horario_inicio.value,
        horario_fim: form.horario_fim.value,
        id_local: form.id_local.value,
        id_usuario: form.id_usuario.value,
        id_disciplina: form.id_disciplina.value,
        id_turma: form.id_turma.value
    }

    await axios.post('http://localhost:3001/cadastro', evento
    ).then((item) => {
        notificao("Evento Adicionado com sucesso!")
        window.location.href = `http://localhost:3001/?data=${evento.data}`
    }).catch((error) => {
        const erros = error.response.data.erro
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