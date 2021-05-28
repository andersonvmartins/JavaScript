const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma 2',
    alunos: [{
        nome: 'Rebeca',
        nota: 6.9
    },{
        nome: 'Roberto',
        nota: 7.3
    }]
}] 

// extrai a nota de cada aluno
const getNotaDoAluno = a => a.nota

//extrai as notas de cada turma
const getNotasDaTurma = t => t.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1);
// [ [ 8.1, 9.3 ], [ 6.9, 7.3 ] ]

// criando uma função para juntar tudo em um unico array
// definido uma nova função do objeto Array com prototype
Array.prototype.flatmap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotasDaTurma)
console.log(notas2);
// [ 8.1, 9.3, 6.9, 7.3 ]