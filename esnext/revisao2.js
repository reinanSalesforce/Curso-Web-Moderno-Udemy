// Arrow Function 
/* Lembrando: O return é implicito mas se você fizer mais de algum processo, precisa 
 colocar o return */
const soma = (a, b) => a + b
console.log(soma(2, 3));

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default, utilizado para deixar a função com um padrão de valor caso não retorne nada
// Nesse exemplo abaixo ele coloca como default para o parametro "texto", o Node
function log(texto = 'Node'){
    console.log(texto);
}

log();
log('Sou mais forte')

// operador rest - agrupa tudo que for passado via parametro
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
// Nesse exemplo ele vai agrupar todos os numeros e no final dá a soma do agrupamento
console.log(total(2, 3, 4, 5))