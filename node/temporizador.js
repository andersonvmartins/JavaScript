const schedule = require('node-schedule')


// '*/5 * 23 * * 2'
// cada 5 segundos de qq minuto as 23h de qq dia do mes
// qq mês e sempre as terça onde domingo é 0
const tarefa1 = schedule.scheduleJob('*/5 * 23 * * 2', () => {
    const data = new Date()
    console.log('Executando tarefa 1! ', 
    data.getHours(), 
    data.getMinutes(), 
    data.getSeconds())
})

setTimeout(()=> {
    tarefa1.cancel()
    console.log('cancelando tarefa 1!');
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 23 // minha hora atual para o teste
regra.second = 30 // cada vez que o segundo for igual a 30

const tarefa2 = schedule.scheduleJob(regra, () => {
    const data = new Date()
    console.log('Executando tarefa 2! ', 
    data.getHours(), 
    data.getMinutes(), 
    data.getSeconds())
    console.log('conteudo dentro de regra.dayOfWeek', regra.dayOfWeek);
    console.log(regra);
})
