
const btnEditaAll = document.querySelectorAll('.edita')
const recorrencia = document.querySelector('.container-checkbox')

btnEditaAll.forEach(edita => {
    edita.addEventListener('click', async (event) => {
        event.preventDefault();
        form.reset();
        modal.style.display = 'flex'
        btnConcluir.value = 'Atualizar'
        recorrencia.style.display = 'none'
      
        let idEvento = edita.parentElement.parentElement.attributes.id.value

        const evento = await axios.get(`http://localhost:8080/eventos/${idEvento}`)

        if(await verificaSeEvento(evento.data.titulo_evento)){
            form.dsc_evento.value = evento.data.dsc_evento
        }else{
            await pegarDisciplina()
            .then((disciplinas) => {
                disciplinaSelecionado.textContent =''
                disciplinaSelecionado.disabled = false
                
                disciplinas.data.forEach(disciplina =>{
                    if(disciplina.pilar == evento.data.turma.pilar.pilar){
                        let option = document.createElement('option')
                        option.value = disciplina.id
                        option.textContent = disciplina.name
                        disciplinaSelecionado.append(option)
                    }
                })

            })

            await pegarProfessores()
            .then((professores) => {
                professorSelecionado.textContent =''
                professorSelecionado.disabled = false
                
                professores.data.forEach(professor =>{
                    if(professor.pilar == evento.data.turma.pilar.pilar){
                        let option = document.createElement('option')
                        option.value = professor.id
                        option.textContent = professor.nome
                        professorSelecionado.append(option)
                    }
                })
            })

            form.id_turma.value = evento.data.turma.id
            form.id_disciplina.value = evento.data.disciplina.id
        }
        form.titulo_evento.value = evento.data.titulo_evento
        form.id_usuario.value = evento.data.usuario.id
        form.id_local.value = evento.data.local.id
        form.data.value = evento.data.data
        form.horario_inicio.value = evento.data.horario_inicio
        form.horario_fim.value = evento.data.horario_fim
    })
})  