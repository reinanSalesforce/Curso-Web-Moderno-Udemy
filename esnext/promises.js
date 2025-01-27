// Utilizado APENAS quando você quer trabalhar com processamento ASSINCRONO
// Existe dois caminhos, um quando é SUCESSO (RESOLVE) e outra quando deu ERRO (Reject)
/* SÓ ACEITA APENAS UM PARAMETRO O RESOLVE E REJECT MAS... caso você queira passar mais de um 
precisa fazer um objeto e passar a variavel desse objeto */

// A função vai retorna uma Promise
function falarDepoisDe(segundos, frase){
    // "resolve e reject" é um parametro de um callback, onde vai receber uma função do tipo arrow.
    // Onde essa função só vai ser chamada quando ela for atendida.
    return new Promise((resolve, reject) => {
        //setTimeOut só pra representar um deley, onde quando retorna ele vai chamar o resolve
        setTimeout(() => {
            // A promise só aceita APENAS UM PARAMETRO
            resolve(frase);
        }, segundos * 1000)
    })
}

/* - Para conseguir acessar minha promise, é importante você colocar o
  ".then(variavelDaPromise =>{ logica })", no caso do exemplo acima a variavelPromise é "frase" que
está informada no "resolve" 
 - QUe pode ser encadeado também um .then atrás do outro onde resolvendo um "then", o valor dele 
passa para o proximo e assim vai 
 - No caso de passar o reject, você precisa adicionar o "reject" na promise e depois chamar o 
  ".catch(error => console.log(error)), onde nesse exemplo vai aparecer o valor que está 
  na variavel "Frase" */
falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(error => console.log(error));