// Função FActory sempre retorna um objeto
function criarProduto(nome, preco){
    return {
        nome, //outra forma de escrever
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('mouse', 57.0));