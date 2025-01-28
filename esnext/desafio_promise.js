const fs = require('fs')

function lerArquivo(path){
    const caminho = __dirname + path
    return new Promise( resolve => {
        fs.readFile(caminho, (err, conteudo) =>{
            resolve(conteudo.toString());
        })
    })
}

lerArquivo('/dados.txt')
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)