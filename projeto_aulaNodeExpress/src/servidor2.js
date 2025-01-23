const porta = 3004;

const express = require('express');
const app = express();

app.get('/produtos', (req, res, next)=>{
    console.log('Middleware');
    next();
})

app.get('/produtos', (req, res, next) =>{
   res.send({nome : 'Nootebook Test', preco : 123.45});
})

app.listen(porta, () =>{
    console.log('Servidor Start');
})