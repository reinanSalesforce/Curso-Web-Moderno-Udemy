// COM PROMISE....
const http = require('http');

// estou passando "Letra" como parametro para função ARROW, pois como são 3 URL's onde 
// existe diferença apenas na turma, no momento de chamar a função getTurma eu passo qual turma eu quero
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        //Get utilizado para informa a URL e depois a resposta dessa URL
        http.get(url, res => {
            let resultado = ''
            
            //função que retorna os dados e acrescenta todos em uma variavel "resultado"
            res.on('data', dados => {
                resultado += dados
            })
    
            //função "end" que retorna quando todo o processo foi realizado pela função acima
            res.on('end', () =>{
                // realizado um try/catch para que quando retorna e não der nenhum problema ele 
                // cai no resolve e caso dê erro ele vai no reject
                try {
                    resolve(JSON.parse(resultado));
                } catch (error) {
                    reject(error)
                }
            })
        })
    })
   
}

// let nomes = []
// getTurma('A', alunos =>{
//     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
//     getTurma('B', alunos =>{
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTurma('C', alunos => {
//             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

/* Promisse.all([função que tem o promise]) - ele pega todas as coisas que estõa no parametro e só vai 
 retorna quando todas as promises foram realizadas, sendo sucesso ou erro. */

/* Entendimento de usar varios ".THEN(parametro => () - função arrow)" 
Sempre o resultado do primeiro vai para o segundo e assim por diante.
Então se no exemplo abaixo o resultado do "Promisse.all" é "Jeremias, lucas, Fernando",
quando ele for para o primeiro ".then" a variavel "turmas" vai está recebendo os valores de 
"Jeremias, lucas, Fernando" e depois fazendo o que tem que ser feito, nesse caso juntando tudo em um
novo array "(...turmas)", dai o resultado desse novo array, vai para o proximo ".then", onde a 
variavel alunos vai receber o resultado final do primeiro .then e assim por diante
*/
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))