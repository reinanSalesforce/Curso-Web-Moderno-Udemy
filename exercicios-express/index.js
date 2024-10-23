// Criei um index.js, pois o package.json está definido como este nome de arquivo para executar no "main".

// ******************************** LEMBRANDO QUE A ORDEM IMPORTA DAS REQUISIÇÕES *********************************

//Obs: para executar esse Index.js, tem que abrir o termina e colocar "node index.js" para começar a executar
//Obs2: Para termina a execução é só aperta ctrl+c
//Obs3: NODEMON utilizado apenas para ambiente de "dev", ele é utilizado para identificar os arquivos e reinicia automaticamente aplicação em vez de digitar "node"
//OBS4: Coloquei dentro do arquivo package.json na sessão script "start : nodemon", quando eu digitar "npm runr start" no terminal ele vai atribui ao nodemon e executar

// Criação de uma constante do Express
const express = require("express");

//Instancia o express para que seja utilizado na nossa aplicação para realizar requisições e outros
const app = express();

// Instanciando o bodyparse para que possamos utilizar ele nas requisições
const bodyParser = require('body-parser')

//[Sempre Colocar em primeiro lugar] trecho que interpreta todo tipo de texto, todas as requisições que forem retorno de texto ele vai ser interpretado
app.use(bodyParser.text());
// Todo retorno vai ser interpretado com json sem precisar coloca "res.json()"
app.use(bodyParser.json());

//Interpreta a URLENCODED ex: "relatorio?completo=true&ano=2018" isso é o urlencoded (lembrando que esse URLENDODED é como vem de um formulario do front-end)
app.use(bodyParser.urlencoded({extended: true}))

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

/* Por questão de Ordem esse get vem primeiro, pois o get que tem o "":id", ele vai entrar nele por passar qualquer parametro, então ele iria entender que
 o "/relatorio" seria um Id e não como estamos querendo desenvolver ele. Por esse motivo vem primeiro. */
app.get('/clientes/relatorio', (req, res) => {

        // O trecho abaixo estou utilizando o "query" para que eu consiga pegar o que está sendo passado na URL referente ao "completo" e "ano"
        // URL utilizada: http://localhost:3000/clientes/relatorio?completo=true&ano=2018
      res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

/* Criando um post que obtem os dados e depois envia os dados  */
app.post('/corpo', (req, res) => {

  /* - Forma menos usada: 
   let corpo = ''
   // Obtendo os dados que está vindo dessa chamada pela nomeclatura abaixo "req.on('data', function(varParte){varCorpo += varParte})"
   req.on('data', function(parte){
        corpo += parte
   })

   // Enviando os dados que foram tratados ou algo do tipo que está vindo dessa chamada pela nomeclatura abaixo "req.on('end', function(){res.send(varCorpo)})"
   req.on('end', function(){
      res.send(corpo)

      // Em caso de você ter um dado JSOn e retorna ele enviando um JSON seria nomeclatura abaixo 
          //res.json(JSON.parse(corpo));
   }) */

  // - Forma mais usada
    res.send(req.body)

})


// Utilizando parametros na requisição
// Obs: o ":" abaixo significa que você pode passar qualquer nome no lugar do Id
//  Obs2: essa parte ":id" - Significado de parametro dá URL
app.get('/clientes/:id', (req, res) => {
        // Para conseguir o Id que está sendo passado na URL é preciso colocar "req.params.nomeDoParametroDaURL"
    res.send(`Cliente ${req.params.id} selecionado!`);
})



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
