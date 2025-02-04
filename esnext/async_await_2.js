function gerarNumerosEntre(min, max, numerosProibidos){
    if (min > max) [max, min] = [min, max] 
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido!!')
        }else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        // utilizando a função "fill" do array que pegar valores randomicos e joga dentro de um array
        for(let _ of Array(qtdNumeros).fill()){
            // adicionando ao array pela função "push"
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        if(tentativas > 10){
            // Maneira de tratar erro de async/AWAIT utilizando o "throw"
            throw "Não deu certo!"
        }else{
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
    
}

// Porque estou usando .then, já que eu to usando "Await" ? É devido ao retorno da minha função "gerarMegaSena", pois o return dela é o array que se trata de uma promise
// internamente, caso o return fosse o proprio await ou uma variavel await, ai não precisaria usar o ".then"... daria pra chamar só a função
gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)