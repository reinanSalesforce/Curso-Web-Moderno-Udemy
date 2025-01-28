// O que você não deve fazer 

// setTimeout(function(){
//     console.log('Executando Callback');
//     setTimeout(function(){
//         console.log('Executando Callback');
//         setTimeout(function(){
//             console.log('Executando Callback');
//         }, 2000)
//     }, 2000)
// }, 2000)

// Ajustando esse código acima para PROMISE (MAIS FACIL)

// Obs: o valor de "tempo = 2000", está definido no parametro para informar que por padrão o tempo é 2000s
// obs2: dai foi criado uma promise para que fizesse o mesmo procedimento de executar o setTimeout
function esperarPor(tempo = 2000){
    return new Promise((resolve) =>{
        setTimeout(function(){
            console.log('Executando promise')
            resolve()
        }, tempo)
    })
}

// para deixar como estava aninhado o setTimeout é só fazer isso
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)