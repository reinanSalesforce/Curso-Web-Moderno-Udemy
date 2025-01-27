// For que interage, onde você coloca o tipo nomeLet of obj, array e outros 
for (let letra of "Cod3r"){
    console.log(letra)
}

const assuntoEcma = ['Map', 'Set', 'Promise'];

// for por indice, então quando for imprimir ele vai mostrar o indice de cada valor, utilizando o "in"
for (let i in assuntoEcma){
    // e dentro do for você interage com a variavel que você definiu, nesse caso "i"
    console.log(i);
}

for (let assunto of assuntoEcma){
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto);
}

// For para mostrar apenas as chaves do Map
for(let assuntoKey of assuntosMap.keys()){
    console.log(assuntoKey)
}

// For para mostrar apenas os valores do Map
for(let assuntoValues of assuntosMap.values()){
    console.log(assuntoValues);
}

// Utilizando o destruction passando a chave e valor
for(let [key, value] of assuntosMap.entries()){
    console.log([key, value])
}   

// Para o set é mesma coisa
// NUNCA se esquecer das " [e o valor aqui dentro] "
const s = new Set(['a', 'b', 'c'])


for(let letra of s){
    console.log(letra);
}
