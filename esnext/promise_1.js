/*let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})*/



// Posso realizar funções fora do meu .then e chamalas dentro do .then para ficar
// simplificado no código
function primeiroElementro(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

/* - Posso também melhorar a minha promise sem colocar dentro de um let ou const e
 chamando meus ".then" depois
 - Fiz tres metodos onde eu fazia abaixo no then e resolvir só chamar a variavel
em vez de fazer a logica nele */
new Promise(function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElementro)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)



// p
//     .then(primeiroElementro)
//     .then(primeiraLetra)
//     .then(letraMinuscula)
//     .then(console.log)