const prisma = require("../data/prisma");

const novoCliente = async (req, res) => {
    let { nome, CPF, email, CNH } = req.body;

    const nomeLimpo = nome.trim();
    const palavrasDoNome = nomeLimpo.split(" ");

    if (nomeLimpo === "" || palavrasDoNome.length < 2) {
        return res.status(400).send("Erro: Digite seu nome completo.");
    }

    let cpfLimpo = String(CPF).replace(/[^0-9]/g, "");

    if (cpfLimpo.length !== 11) {
        return res.status(400).send("Erro: O CPF deve ter exatamente 11 números.");
    }

    email = email.trim().toLowerCase();

    if (!email.includes("@") || !email.includes(".")) {
        return res.status(400).send("Erro: Digite um e-mail válido.");
    }

    const todosClientes = await prisma.clientes.findMany();
    const emailExiste = todosClientes.some(c => c.email.toLowerCase() === email);

    if (emailExiste) {
        return res.status(400).send("Erro: Este e-mail já está cadastrado.");
    }

    const caracteresCNH = CNH.trim().split("");
    const primeiroChar = caracteresCNH[0];

    if (isNaN(parseInt(primeiroChar))) {
        return res.status(400).send("Erro: A CNH deve começar com um número.");
    }

    const ncliente = await prisma.clientes.create({
        data: {
            nome: nomeLimpo,
            CPF: Number(cpfLimpo),
            email: email,
            CNH: CNH.trim()
        }
    });

    res.status(201).json(ncliente);
};

const listarCliente = async (req, res) => {
    const clientes = await prisma.clientes.findMany();
    res.status(200).json(clientes);
};

const buscarCliente = async (req, res) => {
    const { id } = req.params;
    const cliente = await prisma.clientes.findUnique({
        where: { id: Number(id) }
    });
    if (!cliente) return res.status(404).send("Cliente não encontrado.");
    res.status(200).json(cliente);
};

const apagarCliente = async (req, res) => {
    const { id } = req.params;
    const clienteExcluido = await prisma.clientes.delete({
        where: { id: Number(id) }
    });
    res.status(200).json(clienteExcluido);
};

const atualizarCliente = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;
    if (dados.CPF) dados.CPF = Number(String(dados.CPF).replace());

    const clienteAtualizado = await prisma.clientes.update({
        where: { id: Number(id) },
        data: dados
    });
    res.status(200).json(clienteAtualizado);
};

module.exports = {
    novoCliente,
    listarCliente,
    buscarCliente,
    apagarCliente,
    atualizarCliente
};