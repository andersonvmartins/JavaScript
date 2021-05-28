const pessoa = {
    nome: 'Daniella',
    idade: 26,
    peso: 57
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));


Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

// outra forma de ler chave e valor do array
// usando destructuring

Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // pode ser listada
    writabe: false,   // não pode ser sobrescrita
    value: '01/01/2019' // definindo o valor
})

Object.entries(pessoa).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.entries(obj).forEach( ([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

// congela o objeto para não havera alterações
Object.freeze(obj)
obj.c = 1234
console.log(obj)

