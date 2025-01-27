// Set não aceita repetição e não é indexada (não consegue pegar tal posição e mostrar)
const times = new Set()
// Adicionar em um set colocando o "add(valor)"
times.add('Vasco')
// pode ter "add" encadeado ao outro
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
// Valor que não vai ser adicionado ao set, já que ele não aceita repetição
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Flamengo'))
// a variavel tem que ser identica como está no set, nesse caso não existe, pq "Vasco" é com V maiusculo
console.log(times.has('vasco'))
// Conseguimos utilizar também a função delete
times.delete('Flamengo')
console.log(times.has('Flamengo'))

// Pode ser passado também uma constante de array para um SET
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes);
console.log(nomesSet)