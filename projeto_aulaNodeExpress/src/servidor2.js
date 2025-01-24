const porta = 3004;

const express = require('express');
const app = express();
// instanciando o arquivo de BancoDeDados2 para chamar os métodos
const bancoDeDados2 = require('./bancoDeDados2');

// NECESSARIO INSTALAÇÃO DO BODY-PARSE
const bodyParser = require('body-parser');

//app.use(bodyParser.json());

// quando aplicação está utilizando o urlencoded
app.use(bodyParser.urlencoded({ extended : true}));

// Get que não precisa de parametro, já que vai mostrar tudo
app.get('/produtos', (req, res, next)=>{
    //Retorna a lista de produtos;
    res.send(bancoDeDados2.getProdutos());
})

// Get passando parametro, para mostrar algo especifico
app.get('/produtos/:id', (req, res, next) =>{
   res.send(bancoDeDados2.getProduto(req.params.id))
})

/*
 -- Caso quisesse passar mais de um parametro na URL 
app.get('/produtos/:id/:categoria/:especificacao', (req, res, next) =>{
    //Dai aqui dentro eu passaria os parametros
    const categoria = req.params.categoria;
    const id = req.params.id;
    const especificacao = req.params.especificacao;

    // Dai na chamada eu informaria ele ou chamando outro metodo e passando como parametro ou só eles mesmo
    res.send(bancoDeDados2.getProduto(id, categoria, especificacao))
 })
    */

app.post('/produtos', (req, res, next) =>{
    //Criando um objeto dentro do parametro do "salvarProduto" para que seja salvo de acordo com o que está.
    const produto = bancoDeDados2.salvarProduto({
        // utilizei o "body", pois é onde fica o corpo dá requisição e onde eu consiga acessar os campos
        nome: req.body.name,
        preco: req.body.preco
    })
    // retorna a resposta 
    res.send(produto);
})

// essas REQ.Body.name - estamos preenchendo lá no postman, já que não temos front-end
// Nesse caso ele vai alterar um produto especifico de acordo com o parametro ":id"
app.put('/produtos/:id', (req, res, next) =>{
    const produto = bancoDeDados2.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    });
    res.send(produto);
})

// Exclusão de produtos
app.delete('/produtos/:id', (req , res, next) =>{
    const produto = bancoDeDados2.excluirProdutos(req.params.id);
    res.send(produto);
})

app.listen(porta, () =>{
    console.log('Servidor Start');
})