// colocando o caminho para executar um módulo
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// nesse caso não foi preciso colocacar o caminho
// pois a módulo "saudacao" dentro de node_modules
// possui um arquivo index.js
const saudacao = require('saudacao')
console.log(saudacao.ola);

const c = require('./pastaC')
console.log(c.ola2);

// criando um server HTTP
// módulo interno do Node
/* const http = require('http')
http.createServer((req,res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080) */
