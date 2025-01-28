/* Promise passando um objeto como parametro, muito utilizado quando você quer 
passar mais de um parametro na promise, já que a promise só deixa passar apenas 1*/

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa({
        x : 1,
        y : 2
    })
})

// Jeito mais extenso
p.then(function(valor){
    // para imprimir todo o objeto
    console.log(valor);
    // para imprimir o valor especifico
    console.log(valor.x);
})

// Jeito mais simples utilizando a função arrow
p.then(valor => console.log(valor));