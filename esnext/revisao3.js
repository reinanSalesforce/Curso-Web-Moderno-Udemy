// ES8: Object.values/Object.entries

const obj = { a: 1, b: 2, c:3}
// Utilizadno o Object.values(nomeObjeto) para retorna os valores dele
console.log(Object.values(obj));
// Utilizando o object.entries(nomeObjeto) para retornar um array de array
console.log(Object.entries(obj));

// Melhorias na Notação Literal

// Podemos utilizar o mesmo nome de constante que já existe para dentro do objeto,
// dai internamente ele já identifica que a const "nome" existe valor, e só de você informa o nome
// dessa constante no objeto, ele já pega todo atributo dela
const nome = 'Carla'
const pessoa = {
    nome, 
    ola(){
        return 'Oi gente!'
    }
}

// acessando processos do obj, coloca o nome dá constante que está objeto.nomeDaFuncao ou nomeDoAtributo
console.log(pessoa.nome, pessoa.ola())

// Class
// Utilizando classe no JS uma como se fosse o PAI(Animal) e a extensão dela "Cachorro" pelo "extends"
// e dentro uma função, onde pela class "Cachorro" eu pude chamar um metodo dá classe extendida
class Animal {
    falar2(texto){
        return texto;
    }
}
class Cachorro extends Animal {
    falar(){
        return this.falar2("Oie")
    }
}
const cachorro = new Cachorro();
console.log(cachorro.falar());
