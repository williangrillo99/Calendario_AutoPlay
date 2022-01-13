let botaoAdiciona = document.querySelector('#botaoConcluir')

botaoAdiciona.addEventListener('click', async (event) => {
    event.preventDefault();
    
    if(botaoAdiciona.value === 'Adicionar'){
        let professor = {
            nome: form.nome.value,
            pilar: form.pilar.value,
            email: form.email.value,
            abreviacao: form.abreviacao.value,
            disponibilidade: form.disponibilidade.value
        }
    
        await axios.post('http://localhost:8080/professores/cadastro', professor
        ).then((item) => {
            setTimeout(() => {
                window.location.href = `http://localhost:3001/professores`
            },2000)
            notificao("Professor Adicionado com sucesso!")
        }).catch((error) => {
            const erros = error.response.data.mensagem
            console.log(erros);
            notificaoErro(erros)  
        })
    }
    
})
