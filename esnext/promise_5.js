function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) =>{
        try{
            con.log('temp')
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }else{
                resolve(valor);
            }
        }catch(error){
            reject(error)
        }
    })
}


// OBS: Sempre que tiver um CATCH e depois um THEN, ele reseta tudo.
funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro resp: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(error => console.log(`Erro: ${error}`))
    .then(() => console.log('Fim!'))