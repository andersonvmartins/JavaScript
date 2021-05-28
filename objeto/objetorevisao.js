const produto =  new Object
produto.nome =  'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Anderson',
        idade: 56,
        endereco: {
            logradouro: 'Rua Prof. Maria José Machado',
            numero: 337
        }

    },
    condutores: [{
        nome: 'Raphael',
        idade: 26
    },{
        nome: 'Cadu',
        idade: 29
    }],
    calcularValordoSeguro: function() {
        //..
    }
}

console.log(carro)
// alterando um dado através dos atributos
carro.proprietario.endereco.numero = 339
//alterando através do nome do atributo 
carro['proprietario']['endereco']['logradouro'] = 'Rua Ramiz'

console.log(carro)

// excluindo um atributo
delete carro.condutores

console.log(carro)
