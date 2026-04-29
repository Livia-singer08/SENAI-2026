const express = require("express");
const router = express.Router();

const atividadesController = require("../controllers/atividades.controller");

router.get("/atividades", atividadesController.listarAtividades);
router.get("/atividade/:id", atividadesController.buscarAtividade);
router.post("/atividade",atividadesController.cadastrarAtividade);
router.delete("/atividade/:id",atividadesController.deletarAtividade);
router.put("/atividade/:id",atividadesController.atualizarAtividade);

module.exports = router;    