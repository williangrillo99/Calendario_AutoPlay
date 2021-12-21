let btnEdita = document.querySelectorAll('.edita')
let botaoAtualiza = document.querySelector('#botaoConcluir')

btnEdita.forEach(edita =>{
    edita.addEventListener('click', (event) => {
        event.preventDefault();
        botaoAtualiza.value = "Atualizar"
        modal.style.display = 'flex';
        document.querySelector('.titulo').textContent = "Atualizar Turma"

        let tr = event.target.parentNode.parentNode.parentNode;
        
        let id = tr.querySelector('.id')
        let nome = tr.querySelector('.nome')
        let ano = tr.querySelector('.ano')
        let periodo = tr.querySelector('.periodo')
        let semestre = tr.querySelector('.semestre')
        let pilar = tr.querySelector('.tdpilar')
        let tdCategoria = tr.querySelector('.categoria')
        let qtd_alunos = tr.querySelector('.qtd_alunos')
        
        let form = document.querySelector('form');

        form.action = `/turmas/atualizar/${id.textContent}`

        let xhr = new XMLHttpRequest();

        xhr.open('GET', `http://localhost:3001/pilares/${pilar.textContent}`)

        xhr.addEventListener('load', ()=>{
            categoriaSelecionada.textContent =''
            categoriaSelecionada.disabled = false
            
            let categorias = JSON.parse(xhr.responseText)
            
            categorias.forEach(categoria =>{
                let option = document.createElement('option')
                option.value = categoria.id
                option.textContent = categoria.categoria
                categoriaSelecionada.append(option)

                if(tdCategoria.textContent == categoria.categoria){
                    form.categoria.value = categoria.id;
                }
            })
  
            form.nome.value = nome.textContent
            form.pilar.value = pilar.textContent
            form.periodo.value = periodo.textContent
            form.ano.value = ano.textContent
            form.semestre.value = semestre.textContent
            form.qtd_alunos.value = qtd_alunos.textContent
            
        })
        
        xhr.send()  
        
        
        
        botaoAtualiza.addEventListener('click',() =>{
            form.submit();
        })

        
        
    })
})