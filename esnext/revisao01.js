// let e const
// var tinha escopo de função ou escopo global
// let tem escopo de bloco
{
    var a = 2
    let b = 3
}
console.log(a) //2
//console.log(b) // b is not defined

// template string ` `
const produto = 'iPad'
console.log(`${produto} é caro! `) //iPad é caro!

// Destructuring (desestruturar)
// operador resting ...
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras) // C o [ 'd', '3', 'r' ]
console.log(l, e, ...tras) // C o d 3 r

const [x, ,y] = [1, 2, 3]
console.log(x,y) //1 3
const [nome, midname, lastname] = ['anderson', 'vieira', 'martins']
console.log(`${lastname}, ${nome} ${midname}`);