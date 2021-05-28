const aprovados = ['Anderson','Marcia','Marcus','Daniella','Raphael']

aprovados.forEach( function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// outra forma de escrever
aprovados.forEach( (nome, indice) => {
    console.log(`${indice + 1}) ${nome}`)
})

// não é obrigatório usar os dois parametros
aprovados.forEach(nome => console.log(nome))