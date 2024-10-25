// 1 - Definir a porta
const porta = 3003

// Definir as constantes que vão ser usadas no servidor.
const express = require('express');
const app = express();



// Lembrando que /produtos vai depender do que você quer que seja o nome
// Testa de requisição se está tudo OK o servidor
app.get('/produtos', (req, res, next) => {
    // Sempre mandar um res.send para enviar uma resposta para saber como está se comportando
    res.send({ nome: 'Notebook', preco: 123.45}) // Converte automaticamente em JSON
})


// Utilizado para informar a portal que vai ser executada.
app.listen(porta, () =>{
        // Foi feito uma função de callback para informar onde está executando se está correto
    console.log(`Servidor executando na porta ${porta}.`);
})
