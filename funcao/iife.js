// IIFE -> Immediately Invoked Fucnction Espression
// serve pra isolar o contexto e não alterar nada 
// no contexto global
(function(){
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
})()