console.log(typeof String)  // retorna function
console.log(typeof Array)   // retorna function
console.log(typeof Object)  // retorna function

// adicionando uma função no prototype de function String
String.prototype.reverse = function () {    
    return this.split('') //quebra uma string em um array 
               .reverse() //inverte os elementos do array
               .join('') // junta os elementos do array em uma string

}

console.log('Anderson Martins'.reverse())

String.prototype.reverse2 = function () {    
    return this.split(' ') //quebra uma string em um array 
               .reverse() //inverte os elementos do array
               .join('.') // junta os elementos do array em uma string

}

console.log('Anderson Vieira Martins'.reverse2())