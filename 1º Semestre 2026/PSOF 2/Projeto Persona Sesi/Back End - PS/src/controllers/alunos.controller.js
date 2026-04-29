const db = require("../data/connection");

const listarAlunos = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM alunos");
        res.status(200).json(lista[0]).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Erro ao listar alunos"}).end();
    }
};

const buscarAluno = async (req, res) => {
    const idAluno = req.params.id;
    try {
        const aluno = await db.query("SELECT * FROM alunos WHERE id = ?", [idAluno]);
        if (aluno[0].length === 0) {
            res.status(404).json({ msg: "Atividade nao encontrada" }).end();
        } else {
            res.status(200).json(aluno[0][0]).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Erro ao buscar aluno"}).end();
    }
};

const cadastrarAluno = async (req, res) => {
    const {rm, nome, serie, email, cpf} = req.body;
    try {
        const novoAluno = await db.query(
            "INSERT INTO alunos VALUES (DEFAULT, ?, ?, ?, ?, ?)", [rm, nome, serie, email, cpf]);
        const aluno = {
            id: novoAluno[0].insertId,
            rm,
            nome,
            serie,
            email,
            cpf
        };
        res.status(201).json(aluno).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Erro ao cadastrar aluno"}).end();
    }
};

const deletarAluno = async (req, res) => {
    const idAluno = req.params.id;
    try {
        const delAtv = await db.query("DELETE FROM alunos WHERE id = ?", [idAluno]);
        const info = { msg: "" };
        if (delAtv[0].affectedRows === 1) {
            info.msg = "Atividade excluída com sucesso";
        } else {
            info.msg = "Atividade não encontrada";
        }
        res.status(200).json(info).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Erro ao excluir aluno"}).end();
    }
};

const atualizarAluno = async (req, res) => {
    const {rm, nome, serie, email, cpf, id} = req.body;
    try {
        const atualiza = await db.query(
            "UPDATE alunos SET rm = ?, nome = ?, serie = ?, email = ?, cpf = ? WHERE id = ?", [rm, nome, serie, email, cpf, id]);
            
        const info = { msg: "" };
        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhuma aluno encontrada";
        } else {
            info.msg = "Atividade atualizada com sucesso";
        }
        res.status(200).json(info).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Erro ao atualizar aluno" }).end();
    }
};

module.exports = {
    listarAlunos,
    buscarAluno,
    cadastrarAluno,
    deletarAluno,
    atualizarAluno
};