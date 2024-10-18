// Função Reduce - Transforma um array em um elemento ou em outro array dependendo
const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 9.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))

// Nesse exemplo ele fez um map para pegar o valor de cada Nota e no Reduce no "acumulador" ele passa o primeiro elemento e no "atual" ele pega a segunda nota
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual);
    return acumulador + atual
})

console.log(resultado)