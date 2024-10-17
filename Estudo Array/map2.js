const carrinho = [
    '{ "nome" : "Borracha", "preco": 3.45}',
    '{ "nome" : "Caderno", "preco": 13.90}',
    '{ "nome" : "Kit de Lapis", "preco": 41.22}',
    '{ "nome" : "Caneta", "preco": 7.50}'
];

// Retornar um array apenas com os preços

// OBSERVAÇÃO: FAZER SEMPRE ASSIM O MAP, fazer uma constante antes que fazer o processo e depois faz um MAP

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

// Gerando um novo array de acordo com a "const" que foi criada acima passando JSON
const resultado = carrinho.map(paraObjeto).map(apenasPreco);

console.log(resultado);