const url = 'http://localhost:3000/produtos';
const produtos = [];
let produtoAtual = null;

const cadastro = document.querySelector('#cadastro');
const detalhes = document.querySelector('#detalhes');

const tituloProduto = document.querySelector('#tituloProduto');
const imgProduto = document.querySelector('#imgProduto');

const nome = document.querySelector('#nome');
const imagem = document.querySelector('#imagem');
const preco = document.querySelector('#preco');
const categoria = document.querySelector('#categoria');
const marca = document.querySelector('#marca');

const nomeEdit = document.querySelector('#nomeEdit');
const imgEdit = document.querySelector('#imgEdit');
const precoEdit = document.querySelector('#precoEdit');
const categoriaEdit = document.querySelector('#categoriaEdit');
const marcaEdit = document.querySelector('#marcaEdit');

document.querySelector('#btnNovo').addEventListener('click', () => {
    cadastro.classList.remove('oculto');
});

document.querySelector('#btnCancelar').addEventListener('click', () => {
    cadastro.classList.add('oculto');
});

document.querySelector('#btnFechar').addEventListener('click', () => {
    detalhes.classList.add('oculto');
});

document.querySelector('#btnSalvarEdit').addEventListener('click', salvarEdicao);
document.querySelector('#btnExcluir').addEventListener('click', excluirProdutoAtual);

carregarProdutos();

function carregarProdutos(){
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        produtos.length = 0;
        produtos.push(...data);
        listarCards(produtos);
    })
    .catch(err => console.error(err));
}

function listarCards(lista){
    const main = document.querySelector('main');
    main.innerHTML = '';

    lista.forEach(produto =>{
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <img src="${produto.imagem}">
        <h3>${produto.nome}</h3>
        <p>${produto.marca}</p>
        <strong>R$ ${Number(produto.preco).toFixed(2)}</strong>
        `;

        card.onclick = () => abrirProduto(produto);
        main.appendChild(card);
    });
}

function abrirProduto(produto){
    produtoAtual = produto;

    tituloProduto.innerText = produto.nome;
    imgProduto.src = produto.imagem;

    nomeEdit.value = produto.nome;
    imgEdit.value = produto.imagem;
    precoEdit.value = produto.preco;
    categoriaEdit.value = produto.categoria;
    marcaEdit.value = produto.marca;

    detalhes.classList.remove('oculto');
}

imgEdit.addEventListener("input", ()=>{
    imgProduto.src = imgEdit.value;
});

document.querySelector('#formCad').addEventListener('submit', function(e){
    e.preventDefault();

    const novo = {
        nome: nome.value,
        imagem: imagem.value,
        preco: Number(preco.value),
        categoria: categoria.value,
        marca: marca.value
    };

    fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(novo)
    })
    .then(()=>{
        cadastro.classList.add('oculto');
        document.querySelector('#formCad').reset(); // 👈 limpa os campos
        carregarProdutos();
    })
    .catch(err => console.error(err));
});

function salvarEdicao(){
    const editado = {
        nome: nomeEdit.value,
        imagem: imgEdit.value,
        preco: Number(precoEdit.value),
        categoria: categoriaEdit.value,
        marca: marcaEdit.value
    };

    fetch(url + '/' + produtoAtual.id,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(editado)
    })
    .then(()=>{
        detalhes.classList.add('oculto');
        carregarProdutos();
    })
    .catch(err => console.error(err));
}

function excluirProdutoAtual(){
    fetch(url + '/' + produtoAtual.id,{
        method:'DELETE'
    })
    .then(()=>{
        detalhes.classList.add('oculto');
        carregarProdutos();
    })
    .catch(err => console.error(err));
}

const busca = document.querySelector('.busca');

busca.addEventListener('input', ()=>{
    const termo = busca.value.toLowerCase();

    const filtrados = produtos.filter(p =>
        p.nome.toLowerCase().includes(termo) ||
        p.marca.toLowerCase().includes(termo)
    );

    listarCards(filtrados);
});

const botoes = document.querySelectorAll('.filtros button');

botoes.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.ativo').classList.remove('ativo');
        btn.classList.add('ativo');

        const categoria = btn.innerText;

        if(categoria === 'Todos'){
            listarCards(produtos);
        } else {
            const filtrados = produtos.filter(p => p.categoria === categoria);
            listarCards(filtrados);
        }
    });
});