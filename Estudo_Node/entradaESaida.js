// Utilizado para pegar a entrada do "terminal" quando você digita

// Primeiro você coloca uma tag via terminal, ex: node entradaESaida.js -a(tag)
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo);


if(anonimo){
    process.stdout.write('Fala Anonimo!\n')
    process.exit()
}else{
    process.stdout.write('Informe o seu nome:')
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\n', '');
        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}