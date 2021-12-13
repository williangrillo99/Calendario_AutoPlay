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
        
        let form = document.querySelector('.form');

        form.action = `/professor/atualizar/${id.textContent}`

        form.nome.value = nome.textContent
        form.pilar.value = pilar.textContent
        form.email.value = email.textContent
        form.abreviacao.value = abreviacao.textContent
        form.disponibilidade.value = disponibilidade.textContent

        
        
        botaoAtualiza.addEventListener('click',() =>{
            form.submit();
        })

        
        
    })
})