Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let index = 0; index < this.length; index++) {
        if (callback(this[index], index, this)) {
            newArray.push(this[index] )
        }
    }
    return newArray
}


const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IpadPro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


const prodFragil = prod => prod.fragil
const prodCaro = prod => prod.preco >= 1000

const resultado = produtos.filter2(prodFragil).filter2(prodCaro)

console.log(resultado) 