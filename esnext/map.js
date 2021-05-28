const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)


const chavesVariadas = new Map([
    [function () {}, 'funcao'],
    [{}, 'objeto'],
    [123, 'numero'],
    ['Hawaii', 'lugar']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

if (chavesVariadas.has(123)) {
    chavesVariadas.delete(123)
}

console.log(chavesVariadas.has(123)) // false
console.log(chavesVariadas.size)
