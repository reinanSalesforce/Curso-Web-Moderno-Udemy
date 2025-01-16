// Biblioteca que já existe no JS
const fs = require('fs')

//__dirname Significa o diretorio atual + o arquivo que você quer chamar.
const caminho = __dirname + '/arquivo.json'

// sincrono...
// readFileSync e dentro você coloca o caminho + o tipo nesse caso "utf-8"
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

// assincrono...
// De forma assincrona, você chama o fs.readFile(caminho, tipo, função de callback "(err, conteudo)")
fs.readFile(caminho, 'utf-8', (err, conteudo) =>{
    //transformando o conteudo em JSON e depois acessando ele.
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

//retornando os arquivos que está no diretorio, nesse caso no Estudo Node
fs.readdir(__dirname, (err, arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos);
})