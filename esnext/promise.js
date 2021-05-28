//teste
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve(frase) // apenas um parâmetro pode ser passado
         }, segundos * 1000 )
    } )
}

falarDepoisDe(3,'Que Legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase)) 

    