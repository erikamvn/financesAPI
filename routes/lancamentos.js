const express = require("express");
const { writeFile, readFile } = require("fs").promises;
const router = express.Router();
const {inserirLancamento} = require("../controllers/lancamentosController.js")
const {somatorio, media} = require("../libs/calculos.js");
const moment = require("moment");


router.post("/receita", async (req, res) => {
    try{
        let lancamento = req.body;
        res.send(await inserirLancamento(lancamento));

    }catch (err){
        res.send({ erro: err.message});
    }
});

router.post("/despesa", async (req, res) => {
    try{
        let lancamento = req.body;
        res.send(await inserirLancamento(lancamento, "D"));

        await writeFile(global.fileName, JSON.stringify(json));

        res.send(lancamento);

    }catch (err){

    }
});

router.get("/totalMes/:mes", async (req, res) => {
    const json = JSON.parse(await readFile(global.fileName));
    
    let lancamentos = json.lancamentos.filter(lancamento => {
        let m = moment(lancamento.data, "DD/MM/YYYY");
        const mes = m.month() + 1;
        return mes === parseInt(req.params.mes);
    });

    lancamentos = lancamentos.map(lancamento => {
        return lancamento.valor;
    });

    
    res.send({valor: somatorio(lancamentos)});
});

module.exports = router;