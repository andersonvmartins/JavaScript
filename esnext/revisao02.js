// Arrow function
// funcao com dois parametros usar ()
const soma = (a,b) => a + b
console.log(soma(3,4)) //7

// função com um parametro apenas
const cubo = a => a*a*a
console.log(cubo(3))

const quadrado = a => a*a
console.log(quadrado(4))

// Arrow Function (this)
const lexico1 = () => console.log(this===exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametros default
function log(texto = 'Node') {
    console.log(texto);
}

log()
log(null)
log('anderson')

//operador rest
// junta todos os valores dentro de uma estrutura do tipo array
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2,3,4,5))