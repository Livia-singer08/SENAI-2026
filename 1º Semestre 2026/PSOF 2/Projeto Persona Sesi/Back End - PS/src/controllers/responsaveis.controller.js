const db = require("../data/connection");

const listarResponsaveis = async (req, res) => {
    try {
        const lista = await db.query("SELECT * FROM responsaveis");
        res.status(200).json(lista[0]).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Erro ao listar responsáveis"}).end();
    }
};

const buscarResponsavel = async (req, res) => {
    const id = req.params.id;
    try {
        const responsavel = await db.query("SELECT * FROM responsaveis WHERE id = ?", [id]);
        if (responsavel[0].length === 0) {
            res.status(404).json({msg:"Responsável não encontrado"}).end();
        } else {
            res.status(200).json(responsavel[0][0]).end();
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Erro ao buscar responsável"}).end();
    }
};

const cadastrarResponsavel = async (req, res) => {
    const { nome, telefone, email, cpf, rm_aluno } = req.body;
    try {
        const novoResponsavel = await db.query("INSERT INTO responsaveis (nome, telefone, email, cpf, rm_aluno) VALUES (?, ?, ?, ?, ?)", [nome, telefone, email, cpf, rm_aluno]);

        const responsavel = {
            id: novoResponsavel[0].insertId,
            nome,
            telefone,
            email,
            cpf,
            rm_aluno
        };

        res.status(201).json(responsavel).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Erro ao cadastrar responsável"}).end();
    }
};

const deletarResponsavel = async (req, res) => {
    const id = req.params.id;
    try {
        const delResp = await db.query("DELETE FROM responsaveis WHERE id = ?", [id]);
        const info = {msg: ""};
        if (delResp[0].affectedRows === 1) {
            info.msg = "Responsável excluído com sucesso";
        } else {
            info.msg = "Responsável não encontrado";
        }
        res.status(200).json(info).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Erro ao excluir responsável"}).end();
    }
};

const atualizarResponsavel = async (req, res) => {
    const {id, nome, telefone, email, cpf, rm_aluno} = req.body;
    try {
        const atualiza = await db.query("UPDATE responsaveis SET nome = ?, telefone = ?, email = ?, cpf = ?, rm_aluno = ? WHERE id = ?", [nome, telefone, email, cpf, rm_aluno, id]);

        const info = {msg: ""};
        if (atualiza[0].affectedRows === 0) {
            info.msg = "Nenhum responsável encontrado";
        } else {
            info.msg = "Responsável atualizado com sucesso";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Erro ao atualizar responsável"}).end();
    }
};

module.exports = {
    listarResponsaveis,
    buscarResponsavel,
    cadastrarResponsavel,
    deletarResponsavel,
    atualizarResponsavel
};