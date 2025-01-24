// middleware pattern (chain of responsibility)

/* Criando uma const de middleware, onde passamos na função arrow o contexto(ctx) e a função "next", dai você faz o que precisa 
e depois chama o next(), para quando eu chamar essa const, ele ir para o proximo */
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1';
    next()
}

// Mesmo procedimento
const passo2 = (ctx, next) =>{
    ctx.valor2 = 'mid2';
    next()
}

// No caso do passo3 não vou chamar nenhuma outra const/função então passo apenas o contexto
const passo3 = ctx => ctx.valor3 = 'mid3';

// Realizando uma função arrow, onde passo o meu contexto como parametro e um funcionalidade do REST "...nomeQueVoceQuer" com isso ele junta tudo em um array
const exec = (ctx, ...middlewares) => {
    //Dentro dá função arrow, foi realizado outra função para identificar o indice que vamos utilizar e algumas condições
    const execPasso = indice =>{
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1));
    }
    execPasso(0)
}


const ctx = {}
/* Dai quando for chamar a const "exec", passei no primeiro parametro o CTX e segundo parametro consigo passar mais de um valor, pois ele guarda tudo
no "...middlewares" em um array */
exec(ctx, passo1, passo2, passo3)
console.log(ctx);