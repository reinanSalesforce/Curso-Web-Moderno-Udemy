function gerarNumerosEntre(min, max){
    if (min > max){
        //Utilizando um Destructuring, onde no lugar dá variavel eu informo [x, y] a depender do que esteja atribuindo a ele
        //nesse exemplo estou passando [x, y] = [max, min], onde o valor de "X" vai ser "Max" e o "Y" vai ser o "Min"
               //[x ,y] = [max, min]

        //Utilizando destructuring novamente
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log)