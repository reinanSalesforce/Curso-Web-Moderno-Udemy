
// splice - remove e adiciona elementos no array

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
//pop - remove o ultimo elemento 
pilotos.pop();
console.log(pilotos);

// push adiciona um valor ao array
pilotos.push('Verstappen');
console.log(pilotos);

// shift() - remove o primeiro elemento do array
pilotos.shift();
console.log(pilotos);

// unshift  - adiciona um primeiro elemento no array
pilotos.unshift('Hamilton');
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa'); // Apartir do 2 indice, não remover nada "0" e adicionar 
//Bottas e massa
console.log(pilotos);

// remover
pilotos.splice(3, 1) //Remover apartir do terceiro indice o primeiro elemento, nesse caso "Massa"
console.log(pilotos);

//slice (indice) - cria um novo array apartir do indice que você informou (de um pedaço)
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);