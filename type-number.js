//Tipo Number
//Servem para armazenar números

const primeiroNumero = 5
const segundoNumero = 2

const somaDosNumeros = primeiroNumero + segundoNumero
const multiplicacaoDosNumeros = primeiroNumero * segundoNumero
const divisaoDosNumeros = primeiroNumero / segundoNumero

console.log(somaDosNumeros)
console.log(multiplicacaoDosNumeros)
console.log(divisaoDosNumeros)

//----------------------------------------------------------------
//Ponto flutuante

const pontoFlutuanteUm = 3.5
//no js um numero "0.5" seria igual a ".5"
const pontoFlutuanteDois = .5

const novaOperacao = primeiroNumero / pontoFlutuanteUm

console.log(novaOperacao)



//NaN -> not a number(não é um número) 
//Normalmente retorna "NaN" quando tentamos relizar uma operaçao de tipo number com tipo string
//Com operadores: * - / % vai gerar NaN
//Com operador de soma (+) ela junta a string com o number e os transforma em uma string, ou seja, ele realiza uma concatenação

const tipoString = "Vinícius"
const tipoNumber = 10

const soma = tipoString + tipoNumber

console.log(soma)

