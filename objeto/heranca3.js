const pai = {nome: 'Anderson', corCabelo: 'preto'}

// filha passa a ser um prototipo de pai
const filha = Object.create(pai)
filha.nome = 'Daniella'
console.log(filha.corCabelo)

const filho = Object.create(pai, {
    nome: {value: 'Raphael', writable: false, enumerable: true}
})

console.log(filho.nome)
filho.nome = 'Rafael' // conseguirar trocar o nome
console.log(`${filho.nome} tem o cabelo ${filho.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filho))

for (const key in filho) {
    filho.hasOwnProperty(key) ?
      console.log(key) : console.log(`por heranca ${key}`)
}

for (const key in filha) {
    if (Object.hasOwnProperty.call(filha, key)) {
        console.log(filha[key])
    }
}