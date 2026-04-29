const express = require("express");

const router = express.Router();

const { 
    novoCarro,
    buscarCarro,
    listarCarro,
    apagarCarro,
    atualizarCarro
} = require("../controllers/carros.controller");

router.post("/cadastrar/carro", novoCarro);
router.get("/listar", listarCarro);
router.get("/buscar/placa/:placa", buscarCarro);
router.put("/atualizar/:id", atualizarCarro);
router.delete("/apagar/:id", apagarCarro);

module.exports = router;