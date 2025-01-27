// Definindo um Map no JS
const tecnologia = new Map()
// Setando um valor no Map, onde o primeiro valor é a chave e o segundo é valor.
tecnologia.set('react', {framework: false})
tecnologia.set('angular', {framework: true})

// Não pega para acessar o valor do react
console.log(tecnologia.react);
// Só pega o valor se for assim, constanteMap.get('CHAVE').valor
console.log(tecnologia.get('react').framework);

// No map você pode colocar diversos tipos, desde função até objeto. 
// Utilizando ([ [aqui dentro chave e valor] ])
const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])


// Podemos utilizar o forEach no map, lembrando de sempre passar dois valores, a chave e o valor
chavesVariadas.forEach((value, key) =>{
    console.log(key, value)
    
})

// ForEach com condição dentro dele pela chave e imprimindo o valor colocando value, dai ele aparece 
// o valor do value de acordo com a chave e para a chave mesma coisa
chavesVariadas.forEach((value, key) =>{
    if(key == 123){
        console.log('valor da chave' + value);
    }
    
    if(value == 'Número'){
        console.log('Chave' + key);
    }
    
    
})

// Retornando um array com todas as Keys do MAP
const apenasKey = [...chavesVariadas.keys()]
console.log(apenasKey)

// Retornando um array com todos os valores do MAP
const apenasValues = [...chavesVariadas.values()]
console.log(apenasValues)


// a função "has" verifica se existe o valor no Map que está sendo passado no parametro
console.log(chavesVariadas.has(123));
// Deletar uma das chaves do Map utilizando a função "delete" e dentro a chave
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123))
// Verifica o tamanho do MAP
console.log(chavesVariadas.size);
// Adicionando valores ao MAP
chavesVariadas.set(123, 'a')