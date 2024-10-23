function salvar (req, res){
    res.send('Usuario > salvar')
}

function obter(req, res){
    res.send('Usuario > obter')
}

// Para que as funções fique visiveis utilizar a nomeclatura abaixo

// Quando se tem nomes iguais aos da função você pode informar assim:
module.exports = {salvar, obter}

// Caso não seja iguais deve ser informando desse jeito
// module.exports = {salvar: nomeFunctionSalvar, obter: nomeFunctionObter}