const db = require("../data/connection");

const listarCoordenadores = async (req, res) => {
    try {
        const coordenadores = await db.query("SELECT * FROM coordenadores");
        res.status(200).json(coordenadores[0]).end();
    } catch (error) {
        console.error("Erro ao listar coordenadores:", error);
        res.status(500).json({ msg: "Erro ao listar coordenadores" }).end();
    }
};


const buscarCoordenador = async (req, res) => {
    const cpf = req.params.cpf;

    try {
        const coordenador = await db.query("SELECT * FROM coordenadores WHERE cpf = ?", [cpf]);
        if (coordenador[0].length === 0) {
            return res.status(404).json({ msg: "Coordenador não encontrado" }).end();
        }
        res.status(200).json(coordenador[0][0]).end();
    } catch (error) {
        console.error("Erro ao buscar coordenador:", error);
        res.status(500).json({ msg: "Erro ao buscar coordenador" }).end();
    }
};


const cadastrarCoordenador = async (req, res) => {
    const { nome, telefone, atuacao, email, cpf } = req.body;

    try {
        await db.query(
            "INSERT INTO coordenadores (nome, telefone, atuacao, email, cpf) VALUES (?, ?, ?, ?, ?)",
            [nome, telefone, atuacao, email, cpf]
        );

        const coordenador = { nome, telefone, atuacao, email, cpf };
        res.status(201).json(coordenador).end();
    } catch (error) {
        console.error("Erro ao cadastrar coordenador:", error);

        let msg = "Erro ao cadastrar coordenador.";
        if (error) {
            msg = "CPF ou e-mail já cadastrado.";
        }

        res.status(500).json({ msg }).end();
    }
};


const atualizarCoordenador = async (req, res) => {
    const cpf = req.params.cpf;
    const { nome, telefone, atuacao, email } = req.body;

    try {
        const update = await db.query(
            "UPDATE coordenadores SET nome=?, telefone=?, atuacao=?, email=? WHERE cpf=?",
            [nome, telefone, atuacao, email, cpf]
        );

        const info = { msg: "" };

        if (update[0].length === 1) {
            info.msg = "Coordenador atualizado com sucesso";
        } else {
            info.msg = "Coordenador não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.error("Erro ao atualizar coordenador:", error);
        res.status(500).json({ msg: "Erro ao atualizar coordenador"}).end();
    }
};


const deletarCoordenador = async (req, res) => {
    const cpf = req.params.cpf;

    try {
        const del = await db.query("DELETE FROM coordenadores WHERE cpf = ?", [cpf]);
        const info = { msg: "" };

        if (del[0].length === 1) {
            info.msg = "Coordenador excluído com sucesso";
        } else {
            info.msg = "Coordenador não encontrado";
        }

        res.status(200).json(info).end();
    } catch (error) {
        console.error("Erro ao excluir coordenador:", error);

        const info = { msg: "" };
        if (error.erro === 1451) {
            info.msg = "Coordenador vinculado a outra tabela";
        } else {
            info.msg = "Erro ao excluir coordenador";
        }

        res.status(500).json(info).end();
    }
};

module.exports = {
    listarCoordenadores,
    buscarCoordenador,
    cadastrarCoordenador,
    atualizarCoordenador,
    deletarCoordenador



};
