// operador... rest(juntar)/spread(espalhar)
// usar rest com parametro de função

// usar spread com objeto
// ele vai espalhar todos os atributos e valores do funcionario
const funcionario = { nome : 'Maria', salario: 12000}
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usando spread com array
const grupoA = ['João', 'Pedro', 'Gloria'];
const grupoFinal = ['Ester', ...grupoA, 'Raphaela'];
console.log(grupoFinal);