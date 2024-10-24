function removerPropriedade(objeto, nomeDaPropriedade) { 
    const copia = {...objeto} 
    delete copia[nomeDaPropriedade] 
    return copia 
}

console.log(removerPropriedade({a: 1, b:2}, 'a'));
