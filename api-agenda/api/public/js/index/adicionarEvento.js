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
        titulo_evento: form.titulo.value,
        dsc_evento: form.dsc_evento.value,
        data: form.data.value,
        horario_inicio: form.horario_inicio.value,
        horario_fim: form.horario_fim.value,
        id_local: form.id_local.value,
        id_usuario: form.id_usuario.value,
        id_disciplina: form.id_disciplina.value,
        id_turma: form.id_turma.value,
        recorrencia: form.recorrencia.value
    }
    console.log(evento);

    await axios.post('http://localhost:8080/eventos/cadastro', evento
    ).then((item) => {
        setTimeout(() => {
            window.location.href = `http://localhost:3001/?data=${evento.data}`
        }, 2000)
        notificao("Evento Adicionado com sucesso!")
    }).catch((error) => {
        const erros = error.response.data.mensagem
        console.log(erros);
        notificaoErro(erros)
    })
})

async function pegarDisciplina(){
    const disciplinas = await axios.get('http://localhost:8080/disciplinas')
    return disciplinas
}
async function pegarProfessores(){
    const professores = await axios.get('http://localhost:8080/professores');
    return professores
}