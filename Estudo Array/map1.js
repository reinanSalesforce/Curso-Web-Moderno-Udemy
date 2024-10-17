// Map serve para transforma o Array em outro.

const nums = [1, 2, 3, 4, 5];

// For com propósito

// Primeira forma de Fazer
let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)


const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

// Map pegando o array de outro Map para fazer a logica
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado);

// OBS: O "Map" sempre vai gerar um array novo, enquanto o antigo ainda fica com os mesmo valores.