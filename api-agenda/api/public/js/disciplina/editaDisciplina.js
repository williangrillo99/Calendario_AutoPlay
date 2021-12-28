let btnEdita = document.querySelectorAll('.edita')
let botaoAtualiza = document.querySelector('#concluir')

btnEdita.forEach(edita => {
    edita.addEventListener('click', (event) => {
        event.preventDefault();
        botaoAtualiza.value = "Atualizar"
        modal.style.display = 'flex';
        document.querySelector('.titulo').textContent = "Atualizar Disicplina"

        let tr = event.target.parentNode.parentNode.parentNode;
        
        let id = tr.querySelector('.id')
        let nome = tr.querySelector('.nome')
        let pilar = tr.querySelector('.pilar')
        let horas = tr.querySelector('.horas')
        let descricao = tr.querySelector('.descricao')
        
        let form = document.querySelector('form');

        form.action = `/disciplinas/atualizar/${id.textContent}`

        form.name.value = nome.textContent
        form.pilar.value = pilar.textContent
        form.horas.value = horas.textContent
        form.descricao.value = descricao.textContent
        
        botaoAtualiza.addEventListener('click',() =>{
            form.submit();
        })

        
        
    })
})