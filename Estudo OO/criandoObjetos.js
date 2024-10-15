// *********************Tipos de criação Objeto************************

// usando a notação literal
const obj1 = {}
console.log(obj1);


// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2);

// Funções construtoras (Melhor formar)
function Produto(nome, preco, desc){
    // Utilização do "this.nomeAtributo" para informar que vai ser um campo global em vez de privado
    //Com isso você consegue acessar o "nome" da função Construtora
    this.nome = nome

    // função abaixo também ficou como global em vez de privado
    this.getPrecoComDesconto = () => {
        // Agora para a variavel "preco" e "desc" não vão ser global, vão ser privadas que só a função consegue acessar
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2998.99, 0.25);

// Chamando a constante que instanciei meu "Objeto" Produto e acessando a função dentro dele.
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());


// Função Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Um função famosa que retorna Objeto.... (Transformando o JSON em Objeto)
const  fromJson = JSON.parse('{"info": "Sou um JSON"}');
// fromJson.info foi acessado pois o JSON foi transformado em Objeto, dai o "info" fica como se fosse uma variavel e o valor seria o "Sou um JSON"
console.log(fromJson.info);