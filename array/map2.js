const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// desafio
// retornar um array apenas com os precos
// minha solução
let resultado = carrinho.map(e => {
     const result = JSON.parse(e)
     return result.preco
} )

console.log(resultado)

// solução do Leonardo
// utilizando funções de callback dentro de map
const paraObjeto = json => JSON.parse(json)
const apenasPreco = prod => prod.preco

const resultado2 = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado2)

