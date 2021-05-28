// simulando a função foreach do Array
// incluindo a nova função como uma função do array
// usando prototype
Array.prototype.foreach2 = function(callback) {
    for (let index = 0; index < this.length; index++) {
        // (valor do indice, indice, array)
        callback(this[index], index, this)        
    }
}


const aprovados = ['Anderson','Marcia','Marcus','Daniella','Raphael']

aprovados.foreach2( function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

