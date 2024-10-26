const sequence = {
    _id: 1,
    //Função Get para pegar o Id e acrescentar o proximo numero de Id
    get id () {return this._id++}
}

const produtos = {}

// Function para salvar o produto caso o Id dele não esteja já adicionado.
function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

// Pegar o produto por Id
function getProduto(id){
    return produtos[id] || {}
}

// Pegar todos os produtos
function getProdutos(){
    return Object.values(produtos);
}

// Excluir um produto especifico
function excluirProdutos(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}


// Para tornar as funções visiveis para outros modulos(arquivos) passar dentro das chaves as funções
module.exports = {salvarProduto, getProduto, getProdutos, excluirProdutos}