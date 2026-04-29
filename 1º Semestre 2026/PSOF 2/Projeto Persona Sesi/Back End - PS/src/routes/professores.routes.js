const express = require("express");
const router = express.Router();

const professoresController = require("../controllers/professores.controller");
const { validaProfessor } = require("../middlewares/validaLogin");

router.get("/professores", validaProfessor, professoresController.listarProfessores);
router.get("/professor/:id", professoresController.buscarProfessor);
router.post("/professor", professoresController.cadastrarProfessor);
router.delete("/professor/:id", professoresController.deletarProfessor);
router.put("/professor/:id", professoresController.atualizarProfessor);

module.exports = router;