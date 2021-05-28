const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IpadPro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


console.log(produtos.filter(function(e) {
    return e.fragil
} ))

// filtrando produtos fragil / caro
// usando callback arrow function
console.log(produtos.filter(e => e.fragil  && e.preco > 100 ))


// filtrando produtos fragil / caro
// usando callback function
const prodFragil = prod => prod.fragil
const prodCaro = prod => prod.preco >= 1000

const resultado = produtos.filter(prodFragil).filter(prodCaro)

console.log(resultado)
