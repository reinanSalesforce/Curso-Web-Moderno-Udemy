const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'Ipad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return false
}))


// Funções que são criadas antes, utiliza o mesmo nome de função para fazer a condição
/* Ex precoMaior, fiz uma função arrow chamda "caro" e coloquei o retorno dela nomeDaFuncao.preco maior que 300, o nomeDaFuncao.preco não vai retorna nada
 se voce^colocar o console log, mas como eu vou fazer o filter para o "produtos", quando ele tiver no filter ele vai conseguir acessar o preco. */
const caro = produtos => produtos.preco >= 500
// não precisou fazer comparação de "produtos.fragil == true", porque o campo já retorna true/false
const frageis = produtos => produtos.fragil

const result = produtos.filter(caro).filter(frageis)


console.log(result);
