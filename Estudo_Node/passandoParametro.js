// Passando parametros pelo Module.Exports utilizando o "function(...nomes)"
module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`);
}

