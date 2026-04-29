const url = "https://receitasapi-b-2025.vercel.app/";
const receitas = [];

carregarReceitas();

function carregarReceitas(){
    fetch(url + '/receitas')
    .then(response => response.json())
    .then(data =>{
        receitas.length = 0;
        receitas.push(...data);
        listarCards();
    })
    .catch(e => alert('Problemas com a conexão da API'));
}

function listarCards(){
    const container = document.querySelector('main');
    container.innerHTML = '';

    receitas.forEach(receita => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <h3>${receita.nome}<h3>
        <img src="${receita.img}" alt="${receita.nome}">
        <p>Custo Aproximado: ${receita.custoAproximado}<p>
        `;
        container.appendChild(card);
    })
}

function abrirModal() {
    document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

function adicionarReceita() {
    const nome = document.getElementById("nome").value;
    const ingredientes = document.getElementById("ingredientes").value;
    const modoPreparo = document.getElementById("modoPreparo").value;
    const imagem = document.getElementById("imagem").value;
    const custo = document.getElementById("custo").value;

    if (!nome || !ingredientes || !modoPreparo || !imagem || !custo) {
        alert("Preencha todos os campos!");
        return;
    }

    criarCard({
        nome,
        ingredientes,
        modoPreparo,
        imagem,
        custo
    });

    fecharModal();
}

function criarCard(receita) {
    const container = document.getElementById("container-cards");

    const card = document.createElement("div");
    card.classList.add("card-receita");

    card.innerHTML = `
        <h2>${receita.nome}</h2>
        <img src="${receita.imagem}" alt="${receita.nome}">
        <p><strong>Ingredientes:</strong> ${receita.ingredientes}</p>
        <p><strong>Modo de Preparo:</strong> ${receita.modoPreparo}</p>
        <p><strong>Custo Aproximado:</strong> R$ ${receita.custo}</p>
    `;

    container.appendChild(card);

    salvarLocalStorage();
}

function resetarCards() {
    const container = document.getElementById("container-cards");
    container.innerHTML = "";
    localStorage.removeItem("receitas");
}

function salvarLocalStorage() {
    const container = document.getElementById("container-cards");
    localStorage.setItem("receitas", container.innerHTML);
}

function carregarLocalStorage() {
    const container = document.getElementById("container-cards");
    const dadosSalvos = localStorage.getItem("receitas");

    if (dadosSalvos) {
        container.innerHTML = dadosSalvos;
    }
}

carregarLocalStorage();