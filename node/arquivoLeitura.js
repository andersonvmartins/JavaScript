const fs = require('fs')

// sincrono
const caminho = __dirname + '/arquivo.json'
const conteudo = fs.readFileSync(caminho, 'utf-8')

console.log(conteudo)


//assincrono 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    // obrigatório fazer o parse
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})

// usando require não há necessidade de fazer parse do json
const config = require('./arquivo.json')
console.log(config.db);

fs.readdir(__dirname, (err, arquivos) => {
    console.log('conteúdo da pasta...')
    console.log(arquivos);
})