// Criei um index.js, pois o package.json está definido como este nome de arquivo para executar no "main".

//Obs: para executar esse Index.js, tem que abrir o termina e colocar "node index.js" para começar a executar
//Obs2: Para termina a execução é só aperta ctrl+c
//Obs3: NODEMON utilizado apenas para ambiente de "dev", ele é utilizado para identificar os arquivos e reinicia automaticamente aplicação em vez de digitar "node"
//OBS4: Coloquei dentro do arquivo package.json na sessão script "start : nodemon", quando eu digitar "npm runr start" no terminal ele vai atribui ao nodemon e executar


// Criação de uma constante do Express
const express = require('express');

//Instancia o express para que seja a  nossa aplicação para realizar requisições e outros
const app = express();

// Informa a porta que vai ser executada e o trecho depois do numero é uma função de callback para retorna para ver se está realmente PEGANDO
app.listen(3000, () => {
    console.log('Backend Executando 2...')
})

