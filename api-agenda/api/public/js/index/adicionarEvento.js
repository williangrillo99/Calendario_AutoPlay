const checkbox = document.querySelector('#verificaRecorrencia')
const inputRecorrencia = document.querySelector('#recorrencia')
const checksemana = document.querySelector('#checksemanal')

checkbox.addEventListener('change', () =>{
    if(checkbox.checked){
        inputRecorrencia.readOnly = false
        checksemana.style.display = "flex"
    }else{
        checksemana.style.display = "none"
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
let btnConcluir = document.querySelector('#botaoConcluir')

btnConcluir.addEventListener('click', async event => {
    event.preventDefault();
    
    if(btnConcluir.value == 'Adicionar'){
        
        let diasDaSemana = []
        if(form.recorrencia.value){
            form.valorSemanal.forEach(dia => {
                if(dia.checked){
                    diasDaSemana.push(dia.value)
                }
            })
        }

        const evento = {
            titulo_evento: form.titulo_evento.value,
            dsc_evento: form.dsc_evento.value,
            data: form.data.value,
            horario_inicio: form.horario_inicio.value,
            horario_fim: form.horario_fim.value,
            id_local: form.id_local.value,
            id_usuario: form.id_usuario.value,
            id_disciplina: form.id_disciplina.value,
            id_turma: form.id_turma.value,
            recorrencia: form.recorrencia.value,
            diasSemana: diasDaSemana
        }
    
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
    }
})


let turmaSelecionado = document.querySelector('#id_turma')
let disciplinaSelecionado = document.querySelector('#id_disciplina')
let professorSelecionado = document.querySelector('#id_usuario')

turmaSelecionado.addEventListener('change', async () => {
    let idTurma = turmaSelecionado.options[turmaSelecionado.selectedIndex].value;

    const turma = await axios.get(`http://localhost:8080/turmas/${idTurma}`)
    pegarDisciplina()
        .then((disciplinas) => {
            disciplinaSelecionado.textContent =''
            disciplinaSelecionado.disabled = false
            
            disciplinas.data.forEach(disciplina =>{
                if(disciplina.pilar == turma.data.pilar.pilar){
                    let option = document.createElement('option')
                    option.value = disciplina.id
                    option.textContent = disciplina.name
                    disciplinaSelecionado.append(option)
                }
            })

        })
    pegarProfessores()
        .then((professores) => {
            professorSelecionado.textContent =''
            professorSelecionado.disabled = false
            
            professores.data.forEach(professor =>{
                if(professor.pilar == turma.data.pilar.pilar){
                    let option = document.createElement('option')
                    option.value = professor.id
                    option.textContent = professor.nome
                    professorSelecionado.append(option)
                }
            })
        })
})