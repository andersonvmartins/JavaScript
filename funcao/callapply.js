function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto) }`

}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}


// usando call
// o objeto carro possui os dados de preco e desc que são 
// atributos de getPreco
console.log(getPreco.call(carro))
console.log(getPreco.call(carro, 0.17, '$'))

// usando apply
console.log(getPreco.apply(carro))
console.log(getPreco.apply(carro, [0.17, '$'] ))

global.preco = 20
global.desc = 0.1
console.log(getPreco.apply(global, [0.17, '$'] ))


