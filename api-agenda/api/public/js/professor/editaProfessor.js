let btnEdita = document.querySelectorAll('.edita')
let botaoAtualiza = document.querySelector('#botaoConcluir')

btnEdita.forEach(edita => {
    edita.addEventListener('click', (event) => {
        event.preventDefault();
        botaoAtualiza.value = "Atualizar"
        modal.style.display = 'flex';
        document.querySelector('.titulo').textContent = "Atualizar Professor"

        let tr = event.target.parentNode.parentNode.parentNode;
        
        let id = tr.querySelector('.id')
        let nome = tr.querySelector('.nome')
        let pilar = tr.querySelector('.pilar')
        let email = tr.querySelector('.email')
        let abreviacao = tr.querySelector('.abreviacao')
        let disponibilidade = tr.querySelector('.disponibilidade')
    

        form.nome.value = nome.textContent
        form.pilar.value = pilar.textContent
        form.email.value = email.textContent
        form.abreviacao.value = abreviacao.textContent
        form.disponibilidade.value = disponibilidade.textContent
        
        botaoAtualiza.addEventListener('click',async () =>{

            let informacoesAtualizadas ={
                nome: form.nome.value,
                pilar: form.pilar.value,
                email: form.email.value,
                abreviacao: form.abreviacao.value,
                disponibilidade: form.disponibilidade.value
            }
            await axios.put(`http://localhost:8080/professores/atualizar/${id.textContent}`, informacoesAtualizadas).then((() => {
                setTimeout(() =>{
                    window.location.href = `http://localhost:3001/professores`
                }, 2000)
                notificao("Professor Atualizado com sucesso!")
            })).catch((error) => {
                console.log(informacoesAtualizadas, id.textContent);
                const erros = error.response.data.mensagem
                console.log(erros);
                notificaoErro(erros)  
            })
        })

        
        
    })
})