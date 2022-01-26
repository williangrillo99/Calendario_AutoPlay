let btnExcluir = document.querySelectorAll('.remove')

btnExcluir.forEach(excluir => {
    excluir.addEventListener('click', async (event) => {
        event.preventDefault();
        let deletar = document.querySelector('.delete');
        // console.log(deletar);
        deletar.style.display = 'flex';
                
        let idEvento = excluir.parentElement.parentElement.attributes.id.value
        const evento = await axios.get(`http://localhost:8080/eventos/${idEvento}`)

        deletar.querySelector('.informacao').textContent = `Deseja excluir o evento ${evento.data.turma.nome} ?`
        let concluir = deletar.querySelector('.concluirDeletar')
        let cancelar = deletar.querySelector('.cancelarDeletar')

        concluir.addEventListener('click', async () => {
            await axios.delete(`http://localhost:8080/eventos/deletar/${idEvento}`).then(() => {
                setTimeout(() => {
                    window.location.href = `http://localhost:3001/?data=${evento.data.data}`
                }, 1000)
                notificao("Evento deletado com sucesso!")
            }).catch(error => {
                const erros = error.response.data.mensagem
                console.log(erros);
                notificaoErro(erros)
            })
        })
        cancelar.addEventListener('click', () => deletar.style.display = 'none')
        // window.location.href = `/professor/deletar/${id}`
        // console.log(tr, id);
    })
})