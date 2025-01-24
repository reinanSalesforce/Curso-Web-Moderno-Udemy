// Constante que vai inumerar os produtos
const sequence = {
    _id: 1,
    get id() { return this._id++}
}

// Criação de um objeto onde vai armazenar todos os valores dos produtos
const produtos = {}

function salvarProduto(produto){
    //Estou verificando se o produto não existe ID, caso não exista ele vai atribuir o Id do produto pela sequence.
    if(!produto.id) produto.id = sequence.id;

    //O objetivo é armazenar os produtos em um objeto (produtos) usando seus IDs como chaves, permitindo acessá-los rapidamente sem percorrer um array
    /*Então quando for adicionar um produto aquele determinado ID, eu especifico qual o ID "[produto.id]" --CHAVE para meu objeto "produtos" e 
    igualo ele ao valor "produto" --VALOR que está sendo salvo 
    Ex:salvarProduto({ nome: "Teclado", preco: 150 });
    */
    produtos[produto.id] = produto;

    // retorno o produto já com Id
    return produto;
}

function getProduto(id){
    // Vou pegar os produtos "produtos[id]" e caso não retorne nada, ele lança vazio pelo "{}" abaixo.
    return produtos[id] || {}
}

function getProdutos(){
    // retorna os valores dos meus produtos.
    return Object.values(produtos);
}

function excluirProdutos(id){
    const produto = produtos[id];
    delete produtos[id];
    return produto;
}

// Para que eu consiga chamar esses métodos em outro arquivo de JS, preciso colocar isso abaixo e dentro os método que eu quero que fique publico
module.exports = {salvarProduto, getProduto, getProdutos, excluirProdutos}