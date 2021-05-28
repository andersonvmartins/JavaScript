
const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    // verifica se o produto já tem o id
    // senão pega o próximo sequencial
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    // se o produto não for encontrado retorno um objeto vazio
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto // retorno o produto q foi excluido
}


module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto }