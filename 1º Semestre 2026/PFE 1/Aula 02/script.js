let filmes = JSON.parse(localStorage.getItem("filmes")) || [];

document.addEventListener("DOMContentLoaded", renderizarTabela);

function abrirModal(){
    document.getElementById("modal").style.display = "block";
}

function fecharModal(){
    document.getElementById("modal").style.display = "none";
    limparCampos();
}

function salvarFilme() {
    const capa = document.getElementById("capa").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const genero = document.getElementById("genero").value.trim();
    const ano = document.getElementById("ano").value.trim();
    const classificacao = document.getElementById("classificacao").value.trim();
    const produtora = document.getElementById("produtora").value.trim();

    if(!nome){
        alert("O nome do filme é obrigatório!");
        return;
    }

    const novoFilme = {
        id: Date.now(),
        capa,
        nome,
        genero,
        ano,
        classificacao,
        produtora
    };

    filmes.push(novoFilme);
    atualizarLocalStorage();
    renderizarTabela();
    fecharModal();
}

function renderizarTabela(lista = filmes) {
    const tabela = document.getElementById("dados");
    tabela.innerHTML = "";

    lista.forEach(filme =>{
        tabela.innerHTML += `
        <tr>
            <td><img src="${filme.capa}" width="70"></td>
            <td>${filme.nome}</td>
            <td>${filme.genero}</td>
            <td>${filme.ano}</td>
            <td>${filme.classificacao}</td>
            <td>${filme.produtora}</td>
            <td>
                <button onclick="excluirFilme(${filme.id})">Excluir</button>
            </td>
        </tr>
        `;
    });
}

function filtrarGenero(){
    const generoSelecionado = document.getElementById("filtroGenero").value;

    if(generoSelecionado === ""){
        renderizarTabela(filmes);
        return;
    }

    const filtrados = filmes.filter(filme => filme.genero === generoSelecionado);
    renderizarTabela(filtrados);
}

function excluirFilme(id){
    if(!confirm("Deseja realmente excluir o filme?")) return;

    filmes = filmes.filter(filme => filme.id !== id);
    atualizarLocalStorage();
    renderizarTabela();
}

function atualizarLocalStorage(){
    localStorage.setItem("filmes", JSON.stringify(filmes));
}

function limparCampos(){
    document.getElementById("capa").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("ano").value = "";
    document.getElementById("classificacao").value = "";
    document.getElementById("produtora").value = "";
}