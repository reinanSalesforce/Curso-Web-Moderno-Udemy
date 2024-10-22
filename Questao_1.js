function ola (text){
    return console.log( "Olá, " + text + "!");
}

// OU

const ola = function  (text){
    return console.log( "Olá, " + text + "!");
}

// Outra maneira
function comprimentar (nome){
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}


ola('Leonardo');
ola('Maria');
console.log(comprimentar('Leonardo'))