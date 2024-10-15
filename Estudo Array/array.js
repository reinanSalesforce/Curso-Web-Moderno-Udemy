console.log(typeof Array, typeof new Array, typeof[])  

// Forma menos usada de criação de array com "new"
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

// Forma "MAIS USADA" para criação de array
aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'
// função push adiciona um valor ao Array
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
// função sort - orderna o Array 
aprovados.sort();
console.log(aprovados);

// Apenas retira o nome do Indice o "delete"
delete aprovados[1];
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana'];
// função splice - adcionar elementos, remover e adicionar/remover a um determinado indice
//Exemplo Remover apenas o valor do array:  (indice(1), apartir do elemento(2)) - indice 1 apartir do 2 elemento vai apagar.
//Exemplo adiciona apenas o valor do array:  (indice(1), apartir do elemento(0), 'elemento1'(adicionar), 'elemento2'(adicionar)) 
//Exemplo remove e adiciona ao mesmo tempo: (indice(1), apartir do elemento(1), 'elemento1'(adicionar), 'elemento2'(adicionar))
aprovados.splice(1, 2, 'Elemento1', 'Elemento1');
console.log(aprovados);
