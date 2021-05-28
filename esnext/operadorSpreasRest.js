// usar Spread(espalhar) com objeto 
const funcionario = {nome: 'Marcia', salario: 12345.68}
const clone = {ativo: true, ...funcionario}
console.log(clone) //{ ativos: true, nome: 'Marcia', salario: 12345.68 }

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela',...grupoA]

console.log(grupoFinal)


