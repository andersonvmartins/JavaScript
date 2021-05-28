const fabricantes = ['Mercedes','Nissan','Ford','General Motors']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome} `)
}

fabricantes.forEach(imprimir) // com a função
fabricantes.forEach(fabricante => console.log(fabricante)) //com arrow e um parametro
fabricantes.forEach((fabricante,indice) => console.log(`${fabricante} - ${indice + 1}`)) //com arrow e dois parametros