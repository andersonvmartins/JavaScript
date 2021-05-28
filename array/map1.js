const nums = [1, 2, 3, 4, 5]

// map é um For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)
console.log(nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

console.log(soma10(10))
console.log(triplo(10))
console.log(paraDinheiro(10))

resultado2 = nums.map(soma10).map(triplo).map(paraDinheiro)

console.log(resultado2)