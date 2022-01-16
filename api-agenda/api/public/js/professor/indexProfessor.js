let modal = document.querySelector('.body')
let botaoAbrir = document.querySelector('.btn_adicionar_professor')
let form = document.querySelector('.form');


botaoAbrir.addEventListener('click', () =>{
    let form = document.querySelector('.form');
    form.reset()
    modal.style.display = 'flex';
    botaoAdiciona.value = "Adicionar"
    document.querySelector('.titulo').textContent = "Adicionar Professor"
})

