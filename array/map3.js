Array.prototype.map2 = function(callback) {
    const newArray = []   
    for (let index = 0; index < this.length; index++) {
        //newArray[index] = callback(this[index], index, this)
        // ou com push
        newArray.push(callback(this[index], index, this))
    }
    return  newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]



// utilizando funções de callback dentro de map
const paraObjeto = json => JSON.parse(json)
const apenasPreco = prod => prod.preco

const resultado2 = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado2)
