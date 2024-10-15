//Cadeia de protótipos (comparado ao salesforce "Relacionamento entre objetos")

Object.prototype.attr0 = '0' // NUNCA MUDAR O PROTOTYPE DO OBJETO

// "__proto__: objetoPai" - Modo de pegar um atributo do objeto PAI e utilizar nos filhos pelo 
const avo = {attr1: 'A'};
const pai = {__proto__: avo, attr2: 'B', attr: '3'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        /* Observação ao "this", como eu quis pegar a variavel que está fora da minha função "velAtual", para eu poder utilizar mesmo estando fora
         eu utilizei o "this" */
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
    },
    status () {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    status() {
        /* super.funçãoDeOutroObj - Usado para referencia o prototype, sombreando a função que já existe e fazendo um 
        adicional além do que já existe na outra função */
        return `${this.modelo}: ${super.status()}`
    }
}

// Object.setPrototypeOf(nomeObjFilho, nomeObjPai)Segundo modo de fazer relação de Pai e filho
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

// estou conseguindo acessar a função "acelerarMais" , porque fiz a prototype dele com objeto pai que é o "carro"
volvo.acelerarMais(100)
console.log(volvo.status());