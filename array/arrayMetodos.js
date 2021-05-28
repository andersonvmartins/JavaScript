const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
console.log(pilotos)
// remove o ultimo elemento do array
pilotos.pop() // Massa quebrou :(
console.log(pilotos)

// adiciona um elemento no final do array
pilotos.push('Verstappen')
console.log(pilotos)

// remove o primeiro elemento do array
pilotos.shift() 
console.log(pilotos)

// adiciona um elemento no inicio do array
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adiciona a partir da posição dois novos elementos
// o zero diz pra não remover nada
pilotos.splice(2, 0, 'Bottas', 'Massa' )
console.log(pilotos)

pilotos.splice(3, 1)  // Massa quebrou :(
console.log(pilotos)

// cria um novo array recortando a partir do elemento dois
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// cria um novo array recortando a partir do elemento dois
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
