// 1 - Definir a porta
const porta = 3003

// Definir as constantes que vão ser usadas no servidor.
const express = require('express');
const app = express();

/*
FUNÇÃO MIDDLEWARE COM NEXT
app.get('/produto', (req, res, next)=>{
    console.log('Middleware....1');
    next();
});

app.get('/produto',(req, res, next)=>{
    res.send({nome: 'Notebook', preco: 123.45});
})*/

/*  Sem informar o barramento e utilizando o "app.use", qualquer barramento que eu colocar na URL ele vai executar o que está abaixo
app.use((req, res, next)=>{
    res.send({nome : 'Notebook', preco : 123.45})
})*/


// importe do arquivo de banco de dados para que eu possa usufruir dos metodos dentro desse arquivo
const bancoDeDados = require('./bancoDeDados')

//Adicionando o Body-parse
const bodyparse = require('body-parser');
// E informando que todas as requisções(get, post, put e etc) vão poder usar o urlEncoded
app.use(bodyparse.urlencoded({extended: true}))


app.get('/produtos', (req, res, next) => {
    // Vai me retorna todos os produtos existentes
    res.send(bancoDeDados.getProdutos()) // Converte automaticamente em JSON
})

// Lembrando que o ":id" significa o params dá requisição, então se digitar 1 e tiver um produto com ID = 1, ele vai retornar aquele produto.
app.get('/produtos/:id', (req, res, next) => {
    // Vai me retorna o produto que especifiquei no ":id", utilizando o "req.params.id"
    res.send(bancoDeDados.getProduto(req.params.id)) 
})

// Salvar um novo produto
app.post('/produtos', (req, res, next) => {
    // chamando a função do arquivo bancoDeDados e passando com parametro um objeto
    const produto = bancoDeDados.salvarProduto({
        /* pegando de acordo com a requisição e esse processo só vai pegar se você estiver com a biblioteca de body-parse e ter definido a constante do mesmo, além 
        do urlencoded */
        nome: req.body.nome,
        preco: req.body.preco
    })

    //me retorna uma resposta que seria o proprio produto
    res.send(produto)
})

// Alterar um produto
app.put('/produtos/:id', (req, res, next) => {
    // chamando a função do arquivo bancoDeDados e passando com parametro um objeto
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    //me retorna uma resposta que seria o proprio produto
    res.send(produto)
})

// Deletar um produto especifico
app.delete('/produtos/:id', (req, res, next) => {
    // chamando a função do arquivo bancoDeDados e passando com parametro um objeto
    const produto = bancoDeDados.excluirProdutos(req.params.id)

    //me retorna uma resposta que seria o proprio produto
    res.send(produto)
})

// Utilizado para informar a portal que vai ser executada.
app.listen(porta, () =>{
        // Foi feito uma função de callback para informar onde está executando se está correto
    console.log(`Servidor executando na porta ${porta}.`);
})
