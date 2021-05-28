class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        // crfiando dois atributos nessa classe através dos parâmetros
        this.nome = nome
        this.valor = valor
    }

}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    // ...diz que posso receber um número variável de argumentos
    addLancamentos(...lancamentos) {
        // para cada argumento em l incluo o mesmo no array comn push
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario =  new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const cartao = new Lancamento('Cartao', -1120)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz, cartao)

console.log(contas.sumario())
