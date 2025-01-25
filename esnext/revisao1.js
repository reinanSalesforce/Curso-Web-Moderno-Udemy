// let e const 

// com Var eu consigo acessar fora do bloco e com Let só consigo dentro do bloco
{
    var a = 2
    let b = 3
    console.log(b);
}
console.log(a);

// Template String 

// Com esse tipo de template eu consigo utilizar tags de pula linha "\n" e assim vai
const produto = 'Ipad';
console.log(`${produto} é caro!`)

// Destructuring - Maneiras de extrair valores de array

/* Obs: Rest Operator - "...nomeLet" permite agrupar múltiplos elementos em 
 um array ou objeto, facilitando a manipulação de dados dinâmicos. */

//Array
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

// Objeto
const {idade : i, nome} = { nome : 'Ana', idade : 9}
console.log(i, nome)