const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('=/5 * 17 * * 1', function() {
    console.log('Executando a tarefa 1!', new Date().getSeconds())
})

setTimeout(function() {
    tarefa1.cansel()
    console.log('Cancelando a tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.DaysOfWeek = [new schedule.Range(1, 5)]
regra.hour = 17
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Executando a tarefa 2!', new Date().getSeconds())
})