const db = require("../data/connection");

const listarAtividades = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM atividades");
        res.status(200).json(lista[0]).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao listar atividades" }).end();
    }
};

const buscarAtividade = async (req, res) => {
    const idAtividade = req.params.id;
    try {
        const atividade = await db.query("SELECT * FROM atividades WHERE id_atividade = ?", [idAtividade]);
        if (atividade[0].length === 0) {
            res.status(404).json({ msg: "Atividade não encontrada" }).end();
        } else {
            res.status(200).json(atividade[0][0]).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao buscar atividade" }).end();
    }
};

const cadastrarAtividade = async (req, res) => {
    const { materia, media, tarefas, provas, rm_aluno } = req.body;
    try {
        const novaAtividade = await db.query(
            "INSERT INTO atividades (materia, media, tarefas, provas, rm_aluno) VALUES (?, ?, ?, ?, ?)",
            [materia, media, tarefas, provas, rm_aluno]
        );
        const atividade = {
            id_atividade: novaAtividade[0].insertId,
            materia,
            media,
            tarefas,
            provas,
            rm_aluno
        };
        res.status(201).json(atividade).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao cadastrar atividade" }).end();
    }
};

const deletarAtividade = async (req, res) => {
    const idAtividade = req.params.id;
    try {
        const delAtv = await db.query("DELETE FROM atividades WHERE id_atividade = ?", [idAtividade]);
        if (delAtv[0].affectedRows === 1) {
            res.status(200).json({ msg: "Atividade excluída com sucesso" }).end();
        } else {
            res.status(404).json({ msg: "Atividade não encontrada" }).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao excluir atividade" }).end();
    }
};

const atualizarAtividade = async (req, res) => {
    const { id_atividade, materia, media, tarefas, provas, rm_aluno } = req.body;
    try {
        const atualiza = await db.query(
            "UPDATE atividades SET materia = ?, media = ?, tarefas = ?, provas = ?, rm_aluno = ? WHERE id_atividade = ?",
            [materia, media, tarefas, provas, rm_aluno, id_atividade]
        );
        if (atualiza[0].affectedRows === 0) {
            res.status(404).json({ msg: "Nenhuma atividade encontrada" }).end();
        } else {
            res.status(200).json({ msg: "Atividade atualizada com sucesso" }).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao atualizar atividade" }).end();
    }
};

module.exports = {
    listarAtividades,
    buscarAtividade,
    cadastrarAtividade,
    deletarAtividade,
    atualizarAtividade
};