const sequencia ={
    _valor: 1,
    // Pegando o atributo "_valor" e acrescentando 
    // Na função Get sempre vai precisar retornar a variavel que você quer para que no Set você possa manipular
    // LEMBRANDO: sempre usar o "this.nomeVariavel", já que é uma função e para acessa a variavel precisa do This.
    get valor() { return this._valor++},

    // Setando um valor após pegar o valor acima no Get
    // Todo Set vai precisar de um parametro com o nome dá função do get, nesse exemplo é "valor"
    set valor(valor) {
        if(valor > this.valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor);