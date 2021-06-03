const express = require('express')
const app = express()
const port = 3003

// essas linhas substituem o body-parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//app.use(bodyParser.urlencoded({extends: true}))

app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('<h1>Parabéns '+ req.body.nome +' incluido!!</h1>')
    //res.send(res.json(req.body))
})
/* usando metodo GET no formulario os dados são recuperados na
query string e não no body. 
Mas não se passa senha de usuário via método GET*/

/* app.get('/usuarios', (req, res) => {
    //console.log(req.body)
    console.log(req.query)
    res.send('<h1>Parabéns '+ req.body.nome +' incluido!!</h1>')
    //res.send(res.json(req.body))
}) */

/* Usado no form2.html */
app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body)
    res.send('<h1>Parabéns '+ req.body.nome +' alterado</h1>')
    //res.send(res.json(req.body))
})


//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, console.log('Server rodando....'))