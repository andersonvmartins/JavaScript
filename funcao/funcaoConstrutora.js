function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico (usa o this)
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico (usa o this)
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

    //método privado
    getAlgumaCoisa = function () {
        return 1
    }

}


const uno =  new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // retorna function
console.log(typeof uno) // retorna object
