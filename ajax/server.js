const express = require('express')
const app = express()
const port = 8080
// esse comando é para servir o conteudo estático
app.use(express.static('.'))
//app.use(express.json)

// substitui o body-parse
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//multer é um middleware para auxilar no 
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    },
})

// o nome <'arquivo'>  dentro de single abaixo tem que ter o mesmo 
// nome do input do formulario: name="arquivo"
//  <input type="file" name="arquivo" />
const upload = multer({ storage }).single('arquivo')

app.post('/upload',(req,res)=> {
    upload(req, res, err => {
        console.log('Chamou o post...');
        if(err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluido com sucesso.')

    })
})

app.post('/formulario', (req, res) => {
    console.log(req.body)
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // formas de capturar o envio do get
    // req.body
    // req.query
    // req.param
    
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})


app.get('/teste', (req, res) => res.send('Ok'))

app.listen(port, () => 
    console.log(`Executando....`)
)