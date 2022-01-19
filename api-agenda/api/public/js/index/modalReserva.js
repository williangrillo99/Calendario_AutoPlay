let modal = document.querySelector('.body')
let botaoAbrir = document.querySelector('.btn_agenda_horario')

botaoAbrir.addEventListener('click', () =>{
    let form = document.querySelector('.form-evento');

    modal.style.display = 'flex';
    recorrencia.style.display = 'flex'
    escondeDscEvento();
    btnConcluir.value = 'Adicionar'
    document.querySelector('.titulo').textContent = "Reservar Sala"
    disciplinaSelecionado.innerHTML =`<option value='' disabled selected >Selecione</option>`
    disciplinaSelecionado.disabled = true
    professorSelecionado.innerHTML =`<option value='' disabled selected >Selecione</option>`
    professorSelecionado.disabled = true
    form.reset()
})

//verifica se evento ou aula
let titulo_eventos = document.getElementsByName('titulo_evento')
let inputEventos = document.querySelector('.inputradios')

//pegando os selects de turma e disciplina
let inputsTurmaDisciplina = document.querySelector('.resposavel')
let turma = inputsTurmaDisciplina.querySelector('#id_turma')
let disciplina = inputsTurmaDisciplina.querySelector('#id_disciplina')
let dscEvento = document.querySelector('.container-dsc-evento')
let textArea  = dscEvento.getElementsByTagName('textarea')[0]

console.log(inputEventos);
console.log(titulo_eventos);
inputEventos.addEventListener('change', () => {
    titulo_eventos.forEach(async (evento) => {
        console.log(dscEvento);
        if(evento.checked){
            await verificaSeEvento(evento.value)
        }
    })
})

async function verificaSeEvento(tituloEvento){
    if(tituloEvento === 'Evento'){
        await pegarProfessores()
            .then((professores) => {
                professorSelecionado.textContent =''
                professorSelecionado.disabled = false
                
                professores.data.forEach(professor =>{
                    let option = document.createElement('option')
                    option.value = professor.id
                    option.textContent = professor.nome
                    professorSelecionado.append(option)
                })
            })
        inputsTurmaDisciplina.style.display = 'none'
        dscEvento.style.display = 'inline'
        disciplina.value = ''
        turma.value = ''
        return true
    }else{
        escondeDscEvento();
        return false
    }
}


function escondeDscEvento(){
    dscEvento.style.display = 'none'
    textArea.value = ''
    inputsTurmaDisciplina.style.display = 'flex'
}

async function pegarDisciplina(){
    return await axios.get('http://localhost:8080/disciplinas')
    
}
async function pegarProfessores(){
    return await axios.get('http://localhost:8080/professores')
        
}