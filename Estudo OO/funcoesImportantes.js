const pessoa = {
    nome: 'Rebeca', 
    idade: 2,
    peso: 13
}

// Função Object.keys(nomeObjeto) - Retorna as chaves do objeto, nesse caso "nome,idade e peso"
console.log(Object.keys(pessoa));

// Função Object.values(nomeObjeto) - Retorna os valores do objeto, nesse caso "Rebeca, 2 e 13"
console.log(Object.values(pessoa));

// Função Object.entries(nomeObjeto) - Retorna uma lista de chave:valor
console.log(Object.entries(pessoa));

// Função Object.entries junto com forEach para percorrer cada valor dessa lista que é gerada do "entries"
// Onde para percorrer a lista do "entries" precisa fazer ([chave, valor]) e depois vai mostrar 
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Função utilizada para definir algumas configurações em algumas chaves do Objeto
Object.defineProperty(pessoa, 'dataNascimento' , {
    enumerable: false,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa))

// Função object.assign(nomeDosObjetos) - Retorna a junção de todas as chaves e valores que estão dos objetos passado via parametro
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest,o1,o2);

console.log(obj);