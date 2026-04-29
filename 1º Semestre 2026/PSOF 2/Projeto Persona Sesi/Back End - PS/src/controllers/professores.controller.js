const db = require("../data/connection");

const listarProfessores = async (req, res) => {
    try {
        const professores = await db.query("SELECT * FROM professores");
        res.status(200).json(professores[0]).end();
    } catch (error) {
        console.error("Erro ao listar professores:", error);
        res.status(500).json({ msg: "Erro ao listar professores" }).end();
    }
};

const buscarProfessor = async (req, res) => {
    const cpf = req.params.cpf;

    try {
        const professor = await db.query("SELECT * FROM professores WHERE cpf = ?", [cpf]);
        if (professor[0].length === 0) {
            return res.status(404).json({ msg: "Professor não encontrado" }).end();
        }
        res.status(200).json(professor[0][0]).end();
    } catch (error) {
        console.error("Erro ao buscar professor:", error);
        res.status(500).json({ msg: "Erro ao buscar professor" }).end();
    }
};

const cadastrarProfessor = async (req, res) => {
    const { nome, telefone, disciplina, email, cpf } = req.body;

    try {
        await db.query(
            "INSERT INTO professores (nome, telefone, disciplina, email, cpf) VALUES (?, ?, ?, ?, ?)",
            [nome, telefone, disciplina, email, cpf]
        );

        const professor = { nome, telefone, disciplina, email, cpf };
        res.status(201).json(professor).end();
    } catch (error) {
        console.error("Erro ao cadastrar professor:", error);

        let msg = "Erro ao cadastrar professor.";
        if (error.code === "ER_DUP_ENTRY") {
            msg = "CPF ou e-mail já cadastrado.";
        }

        res.status(500).json({ msg }).end();
    }
};

const atualizarProfessor = async (req, res) => {
    const cpf = req.params.cpf;
    const { nome, telefone, disciplina, email } = req.body;

    try {
        const update = await db.query(
            "UPDATE professores SET nome=?, telefone=?, disciplina=?, email=? WHERE cpf=?",
            [nome, telefone, disciplina, email, cpf]
        );

        const info = { msg: "" };

        if (update[0].affectedRows === 1) {
            info.msg = "Professor atualizado com sucesso";
        } else {
            info.msg = "Professor não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.error("Erro ao atualizar professor:", error);
        res.status(500).json({ msg: "Erro ao atualizar professor" }).end();
    }
};

const deletarProfessor = async (req, res) => {
    const cpf = req.params.cpf;

    try {
        const del = await db.query("DELETE FROM professores WHERE cpf = ?", [cpf]);
        const info = { msg: "" };

        if (del[0].affectedRows === 1) {
            info.msg = "Professor excluído com sucesso";
        } else {
            info.msg = "Professor não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.error("Erro ao excluir professor:", error);

        const info = { msg: "" };
        if (error.errno === 1451) {
            info.msg = "Professor vinculado a outra tabela.";
        } else {
            info.msg = "Erro ao excluir professor.";
        }
        res.status(500).json(info).end();
    }
};

module.exports = {
    listarProfessores,
    buscarProfessor,
    cadastrarProfessor,
    atualizarProfessor,
    deletarProfessor
};