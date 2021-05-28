const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// desafio: mostra a mulher chinesa com o menor salario
// maneira Anderson
axios.get(url).then(response => {
    const funcionarios = response.data
    const todosDaChina = func => func.pais == 'China'
    const soMeninas = func => func.genero == 'F'
    

    const mulheresChinesas = funcionarios
                            .filter(todosDaChina)
                            .filter(soMeninas)

    const mulheresPorSalario = mulheresChinesas.sort((a,b) => {
        return a.salario - b.salario 
    })

    console.log(mulheresPorSalario[0]); 
})

// maneira Leonardo
const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario) 

   // console.log(func);
}) 