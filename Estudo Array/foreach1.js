// Maneiras de criar forEach

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// Primeira maneira (menos usada)
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// Segunda maneira (mais usada)
aprovados.forEach(nome => console.log(nome));


// Terceira Maneira
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados);
