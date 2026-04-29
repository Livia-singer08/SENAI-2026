const validaProfessor = (req, res, next) => {
    const login = req.headers['user'].login;

    if(login === "COORDENADOR") {
        next();
    } else {
        res.status(401).send("Sem Nível de Acesso").end();
    }
};

const validaAluno = (req, res, next) => {
    const login = req.headers['user'].login;

    if(login === "COORDENADOR") {
        next();
    } else {
        res.status(401).send("Sem Nível de Acesso").end();
    }
};

module.exports = {
    validaProfessor,
    validaAluno
}