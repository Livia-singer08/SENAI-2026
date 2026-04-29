const express = require("express");

const router = express.Router();

const { 
   novoCliente,
    listarCliente,
    buscarCliente,
    apagarCliente,
    atualizarCliente
} = require("../controllers/clientes.controller");

router.post("/cadastrar/cliente", novoCliente);
router.get("/listar", listarCliente);
router.get("/buscar/email/:email", buscarCliente);
router.put("/atualizar/:id", atualizarCliente);
router.delete("/apagar/:id", apagarCliente);

module.exports = router;