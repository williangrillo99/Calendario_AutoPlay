const routerRelatorio = require("express").Router();
const RelatorioController = require("../controllers/RelatorioController")

routerRelatorio.get("/", async (req, res,) => {

    const quantidadeRelatorio = await RelatorioController.calcular()
    res.send(quantidadeRelatorio)

})
   

module.exports = routerRelatorio;