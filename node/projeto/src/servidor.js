const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

/* app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})
 */ 
// executa um parser na requisição transformando o body
// em um objeto para que possa ser lido como:
// ex.: req.params.id ou req.body.nome
// isso pq o body está no formato 
// x-www-form-urlencoded
// executa para todas as requisições pois não foi definido 
// uma URL específica
app.use(bodyParser.urlencoded({ extended: true}))

// recuperando todos os registros
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
})

// recuperando um registro
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) 
})

//inserindo registro
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    }) 
    res.send(produto) // converte em JSON

})

// atualizando um registro
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    }) 
    res.send(produto) // converte em JSON

})

// excluindo um registro
app.delete('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.excluirProduto(req.params.id)) 

})


app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`);
})