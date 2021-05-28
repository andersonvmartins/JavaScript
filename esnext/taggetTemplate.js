// tagget template - processa o template dentro da funcao
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice)=> {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
const precoCartao = 35.4
console.log(real `1x de ${preco}, 3x de ${precoParcela} ou ${precoCartao} no cartao. `)