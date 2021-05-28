// instanciaUnica exporta um objeto
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// instanciaNova exporta uma função (factory)
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)
// retorna 3

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor)
// retorna 1

