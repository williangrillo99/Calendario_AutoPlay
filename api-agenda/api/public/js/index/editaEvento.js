
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

        btnConcluir.addEventListener('click', async () => {

            let eventoAutalizado = {
                titulo_evento: form.titulo_evento.value,
                dsc_evento: form.dsc_evento.value,
                data: form.data.value,
                horario_inicio: form.horario_inicio.value,
                horario_fim: form.horario_fim.value,
                id_local: form.id_local.value,
                id_usuario: form.id_usuario.value,
                id_disciplina: form.id_disciplina.value,
                id_turma: form.id_turma.value
            }

            if(btnConcluir.value == 'Atualizar'){
                await axios.put(`http://localhost:8080/eventos/atualizar/${idEvento}`, eventoAutalizado)
                    .then(() => {
                        setTimeout(() => {
                            window.location.href = `http://localhost:3001/?data=${eventoAutalizado.data}`
                        }, 1000)
                        notificao("Evento Atualizado com sucesso!")
                    }).catch(error => {
                        const erros = error.response.data.mensagem
                        console.log(erros);
                        notificaoErro(erros)
                    })
            }
        })
    })
})  