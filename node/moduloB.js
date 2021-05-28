//variável não é visivel fora do módulo
let a = 2 

//tudo que for pra ficar visível fora do modulo
// tem que ser exportado
module.exports = {
    bomDia: 'Bom dia!',
    boaNoite() {
        return 'Boa noite!'
    }    
}