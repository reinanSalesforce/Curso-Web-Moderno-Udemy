// Criei um index.js, pois o package.json está definido como este nome de arquivo para executar no "main".

//Obs: para executar esse Index.js, tem que abrir o termina e colocar "node index.js" para começar a executar
//Obs2: Para termina a execução é só aperta ctrl+c
//Obs3: NODEMON utilizado apenas para ambiente de "dev", ele é utilizado para identificar os arquivos e reinicia automaticamente aplicação em vez de digitar "node"
//OBS4: Coloquei dentro do arquivo package.json na sessão script "start : nodemon", quando eu digitar "npm runr start" no terminal ele vai atribui ao nodemon e executar

// Criação de uma constante do Express
const express = require("express");

//Instancia o express para que seja a  nossa aplicação para realizar requisições e outros
const app = express();

/* 

Obs1: o req e res é uma função de callback dentro da função "use"
Obs2: Colocamos o "/opa" pelo motivo de informar que aplicação só vai aparecer o "Estou bem" quando a URL estiver com o "/Opa"
Obs3: utilizando a função "use", ele vai ser aplicado para qualquer requisição sendo GET ou POST.

app.use('/opa', (req, res) => {
    //nomeclatura utilizada para enviar uma resposta ao site, ele também interpreta o html no envio
    res.send("Estou <b>bem</b>!")
})

 - Utilizando a função "all" que retorna o mesmo texto para diversos métodos (get, put, post e etc)

app.all('/opa', (req, res) => {
    res.send("Estou <b>bem</b>!")
}

// Função Midddleware é realizada com 3 parametros (req, res e next), o next ele vai informa que depois de executar esse código ele vai para o proximo.
app.use("/opa", (req, res, next) => {
    console.log("Antes....");
    next()
  });

*/

// Utilizando a função middleware que criei "saudacaomid"
const saudacao = require('./saudacaoMid');
app.use(saudacao('Guilherme'));

/* Para que aplicação faça apenas o método especifico (GET ou POST), alterar a função "use" para GET ou POST utilizar a nomeclatura: */
app.get("/opa", (req, res, next) => {
    console.log("Durante...")
  /* 
***********    - Primeiro tipo de resposta: Formatação com HTML **********
    res.send("Estou <b>bem Get</b>!") 

 *********   - Segundo tipo de resposta: JSON Objeto ****************
    res.json({
        name: 'Ipad 32gb',
        price: 1899.00,
        discount: 0.12
    })

************   - Terceiro tipo de resposta: JSON Array ****************
  res.json([
    { id: 7, name: "AnA", position: 1 },
    { id: 34, name: "Bia", position: 2 },
    { id: 73, name: "Carlos", position: 3 },
  ]);
  
  */

  // Quarto tipo de resposta: JSON Objeto e algumas informações sobre a requisição e os dados
  res.json({
        data: [
        { id: 7, name: "AnA", position: 1 },
        { id: 34, name: "Bia", position: 2 },
        { id: 73, name: "Carlos", position: 3 }
        ],
        count: 3,
        skip: 0,
        limit: 3,
        status: 200
  });

  next()
});

app.post("/opa", (req, res) => {
    console.log('Depois....')
  res.send("Estou <b>bem Post</b>!");
});

// Informa a porta que vai ser executada e o trecho depois do numero é uma função de callback para retorna para ver se está realmente PEGANDO
app.listen(3000, () => {
  console.log("Backend Executando 2...");
});
