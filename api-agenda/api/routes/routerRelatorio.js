const rotasRelatorio = require('express').Router()
const axios = require('axios')

rotasRelatorio.get('/', async(req, res) =>{
    const relatorio  = await axios.get("http://localhost:8080/relatorios")
    console.log(relatorio)
    res.render('../api/views/relatorio', {relatorio:relatorio.data, title:"Relatorio"})
})

module.exports = rotasRelatorio;