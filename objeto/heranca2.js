 // cadeia de protótipos (prototype chain)
 Object.prototype.attr0 = 'Z' // não faça isso
const avo = {attr1: 'A'}
// usando o atributo "__proto__" para definir o prototype
const pai = {__proto__: avo, attr2: 'B'} 
const filho = {__proto__: pai, attr3: 'C'}


console.log(filho.attr1,  filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}
const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        // super chama a função do antecessor(prototype)
        return `${this.modelo}: ${super.status()}` 
    }
}
// mostra o objeto antes de relacionar o prototipo
console.log(volvo)

// usando a função "setPrototypeOf" para definir o prototype
// diz que o objeto "volvo" é um protótipo do objeto "carro"
Object.setPrototypeOf(volvo, carro)

volvo.acelerarMais(100)
console.log(volvo.status())
console.log(volvo.velAtual)
console.log(volvo.velMax)
