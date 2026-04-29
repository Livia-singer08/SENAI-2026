require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const responsaveisRoutes = require('./src/routes/responsaveis.routes');

app.use('/responsaveis', responsaveisRoutes);


const coordenadoresRoutes = require('./src/routes/coordenadores.routes');

app.use('/coordenadores', coordenadoresRoutes);


const professoresRoutes = require('./src/routes/professores.routes');

app.use('/professores', professoresRoutes);


const atividadesRoutes = require('./src/routes/atividades.routes');

app.use('/atividades', atividadesRoutes);


const alunosRoutes = require('./src/routes/alunos.routes');

app.use('/alunos', alunosRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
