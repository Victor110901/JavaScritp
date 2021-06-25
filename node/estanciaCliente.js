const contadorA = require('./estanciaUnica')
const contadorB = require('./estanciaUnica')

const contadorC = require('./estanciaNova')()
const contadorD = require('./estanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor, contadorA.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)