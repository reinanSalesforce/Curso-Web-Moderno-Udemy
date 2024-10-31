const despesasTotais = (ArrayDespesas) => {
    const getPreco = p => p.preco
    /*  Na função soma, você usou dois parâmetros (total e sum) porque o método "reduce" trabalha com uma função que acumula 
    o valor anterior e o valor atual da iteração. */
    const soma = (total, sum) => total + sum 
    const totaldespesas = ArrayDespesas.map(getPreco).reduce(soma)
    console.log(totaldespesas);
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])

despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
])