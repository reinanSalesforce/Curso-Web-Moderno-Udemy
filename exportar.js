console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
// O mais recomendado para exportar.
module.exports.c = 3;

exports = null;
console.log(module.exports);

// Obs: O valor só vai mudar do exports se for pelo "module.exports", se for nesse caso abaixo ele não muda
exports = {
    nome: 'Teste'
}

console.log(module.exports);

module.exports = {
    publico: true
}