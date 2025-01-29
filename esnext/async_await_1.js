function esperarPor(tempo = 2000){
    return new Promise((resolve) =>{
        setTimeout(()=> resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3...'))
function retornaValor(){
    return new Promise(resolve =>{
        setTimeout(() => resolve(10), 5000)
    })
}

async function retornaValorRapido(){
   return 20
}

// Obs: O await você consegue manipular mais do que usar o .THEN isso pra await, pois ele parece ser sincrono mas é assincrono
// O motivo dele ser melhor, é que você consegue atribuir o retorno final daquela função colocando o await em uma const ou let no exemplo abaixo
async function executar() {
    let valor = await retornaValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

// Posso chamar uma dentro dá outra
async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor);
    
}

executarDeVerdade()