// pode ser chamar a função mesmo antes da escrita
// da função (somente function declaration)
// o javascript compila primeiro as funções para depois 
// executar o código
console.log(soma(3,4))

// function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

// named function expression
// não é muito utilizado, só facilita na hora de debugar
const mult =  function mult(x, y) {
    return x * y
}