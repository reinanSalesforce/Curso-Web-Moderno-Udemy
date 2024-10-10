const produto = new Object
// Maneira de acessa o campo de "name"
produto.name = 'Cadeira';
// Segunda mandeira de acesso o campo de 'marca do produto'
produto['marca do produto'] = 'Generica';
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto['marca do produto']
console.log(produto)


//Criação de Objeto e dentro do objeto criações de outros objetos, array e function
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
         // .... 
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro);