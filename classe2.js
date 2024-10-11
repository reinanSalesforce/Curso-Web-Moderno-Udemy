class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}


// Extends = utilizado para extender a classe PAI para utilizar os atributos dela, como exemplo "sobrenome", além de utilizar "super"
class Pai extends Avo{
    constructor(sobrenome, profissao = 'Professor'){
        /* super(atributoPai quantidade de atributo dependendo do parametro dá classe Pai) - é utilizado para acessar o 
        construtor dá classe PAI e outros métodos dela */
        //exemplo abaixo está passando apenas um valor no parametro, pois o construto do Avo só tem um parametro
        // OBS: de preferencia utilizar o mesmo nome do construtor.
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)