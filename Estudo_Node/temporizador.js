const { compact } = require('lodash');
const schedule = require('node-schedule');


// "*/5" - Execução de 5 em 5 segundos
// Primeiro "*" qualquer minuto
// 12 - Hora 
// Segundo "*" - ignorar o dia do mês
// Terceiro "*" - ignorar o proprio mês
// "2" - Vai ser executado na Terça-feira, onde 0 é domingo, 1 é segunda, 2 é terça e assim vai...
// Função onde dentro dela vocÊ pode colocar qualquer coisa para que ele faça quando executar esse schedule
const tarefa1 = schedule.scheduleJob('*/5 26 12 * * 5', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds());
})

// SetTimout utilizado para cancelar o schedule assim que atingir os 20000 (20s)
setTimeout(function (){
    tarefa1.cancel();
    console.log('Estou encerrando o schedule');
},20000)

// Outra forma diferente
// Colocando os valores dentro dessa regra para que ele faça de acordo com o que foi pedido
const regra = new schedule.RecurrenceRule();
// vai executar de segunda a sexta
regra.dayOfWeek = [new schedule.Range(1,5)]
// Executar as 12h
regra.hour = 12;
// De 30 em 30 segundos
regra.second = 30;

// Utilizando a const regra para criação de outra SCHEDULE
const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2', new Date().getSeconds())
})