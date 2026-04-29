const express = require("express");
const router = express.Router();

const coordenadoresController = require("../controllers/coordenadores.controller");

router.get("/coordenadores", coordenadoresController.listarCoordenadores);
router.get("/coordenador/:id", coordenadoresController.buscarCoordenador);
router.post("/coordenador", coordenadoresController.cadastrarCoordenador);
router.delete("/coordenador/:id", coordenadoresController.deletarCoordenador);
router.put("/coordenador/:id", coordenadoresController.atualizarCoordenador);

module.exports = router;