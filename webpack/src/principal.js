import Pessoa from "./pessoa" 
import './modulos/moduloA'
//import './assets/css/estilo.css'
import './assets' // para pegar o index.js como padrão
// o arquivo index.js tem a referencia para os css e scss


const atendente = new Pessoa
console.log(atendente.cumprimentar())