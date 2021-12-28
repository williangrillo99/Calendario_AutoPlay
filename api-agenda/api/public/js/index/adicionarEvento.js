const checkbox = document.querySelector('#verificaRecorrencia')
const inputRecorrencia = document.querySelector('#recorrencia')

checkbox.addEventListener('change', () =>{
    if(checkbox.checked){
        inputRecorrencia.readOnly = false
    }else{
        inputRecorrencia.readOnly = true
        inputRecorrencia.value = ''
    }
})