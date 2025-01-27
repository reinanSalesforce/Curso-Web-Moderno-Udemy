// Simplificando a chamada da Promise...

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

//Simplificando o uso dá promise utilizadno Async/await
// Onde para utilizar o async você tem que definir a função ou let com o 
// async() => { aqui dentro colocar o "await" e depois retornar o mesmo}
let obterAlunos = async ()=>{
    // utilizando o await no getTurma para quando ele retorna ficar na constante "ta"
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    // para retornar um array concatenado com as constantes
    return [].concat(ta, tb, tc);
}

// dai você chama a variavel que contem a função e depois passa o ".then"
obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))