const alunos = [
    {nome: 'Anderson', nota: 7.9},
    {nome: 'Raphael', nota: 9.2}
]

// imperativo
let total1 = 0
for (let index = 0; index < alunos.length; index++) {
    total1 += alunos[index].nota;    
}
console.log(total1 / alunos.length)

// declarativo
const getNota = aluno => aluno.nota
const soma = (acumulador, valor) => acumulador + valor

// map: mapeia todos os itens do array recuperando o valor da nota
// reduce: reduz todo o calculo da soma em unico valor
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2/alunos.length)