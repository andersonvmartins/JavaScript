const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
    //console.log(naodeclarado)
}


function exec() {
    const valor = 'Local'
    minhaFuncao()
}


exec()