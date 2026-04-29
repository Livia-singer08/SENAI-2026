const express = require("express");
const router = express.Router();

const responsaveisController = require("../controllers/responsaveis.controller");

router.get("/responsaveis",responsaveisController.listarResponsaveis);
router.get("/responsavel/:id",responsaveisController.buscarResponsavel);
router.post("/responsavel",responsaveisController.cadastrarResponsavel);
router.delete("/responsavel/:id",responsaveisController.deletarResponsavel);
router.put("/responsavel/:id",responsaveisController.atualizarResponsavel);

module.exports = router;    