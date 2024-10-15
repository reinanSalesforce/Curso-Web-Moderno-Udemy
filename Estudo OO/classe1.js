// Criando Classe junto com método dentro vulgo função e construtor

class Lancamento {
    // Construtor criado para ao instancia a classe ser iniciado o que está no construtor abaixo:
    constructor(nome = 'Genérico', valor = 0){
        // This.nomeParamento utilizado para conseguir ter acesso as variaveis de nome e valor
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        // utilizou o array "lancamentos" e fez um forEach para percorrer o array e adiciona ao mesmo dando push
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

// Quando foi instanciado o "CicloFinanceiro" passamos os valores no parametro em comparação ao construtor da classe
/*No exemplo abaixo o construtor do CicloFinanceiro tem dois parametros que seria "mes e ano" 
    e com isso na instancia passei dois parametros também
    */
const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())