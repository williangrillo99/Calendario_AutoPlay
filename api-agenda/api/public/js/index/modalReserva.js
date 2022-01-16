let modal = document.querySelector('.body')
let botaoAbrir = document.querySelector('.btn_agenda_horario')

botaoAbrir.addEventListener('click', () =>{
    let form = document.querySelector('form');

    modal.style.display = 'flex';
    document.querySelector('.titulo').textContent = "Reservar Sala"
    form.reset()
    
})

//verifica se evento ou aula
let dsc_evento = document.getElementsByName('titulo')
let inputEventos = document.querySelector('.inputradios')

//pegando os selects de turma e disciplina
let inputsTurmaDisciplina = document.querySelector('.resposavel')
let turma = inputsTurmaDisciplina.querySelector('#id_turma')
let disciplina = inputsTurmaDisciplina.querySelector('#id_disciplina')
let dscEvento = document.querySelector('.container-dsc-evento')
let textArea  = dscEvento.getElementsByTagName('textarea')[0]

inputEventos.addEventListener('change', () => {
    dsc_evento.forEach((evento) => {
        if(evento.checked){
            if(evento.value === 'Evento'){
                inputsTurmaDisciplina.style.display = 'none'
                dscEvento.style.display = 'inline'
                disciplina.value = ''
                turma.value = ''
            }else{
                dscEvento.style.display = 'none'
                textArea.value = ''
                inputsTurmaDisciplina.style.display = 'flex'
            }
        }
    })
})