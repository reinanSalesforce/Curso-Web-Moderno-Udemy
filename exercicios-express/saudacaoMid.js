// Criando uma função Middleware para ser chamada no Index.js

function saudacao (nome){
    // Coloquei o retorno de função middleWare para que seja utilizado o next
    return function(req, res, next){
        console.log(`Seja bem-vindo ${nome}`)
        next()
    }
}

// exportando esse modulo(arquivo)
module.exports = saudacao