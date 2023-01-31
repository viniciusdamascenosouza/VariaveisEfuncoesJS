// parâmetros de função

function soma(numero1, numero2) {
    return numero1 + numero2
}

function multiplicação(numero1, numero2) {
    return numero1 * numero2
}

console.log(multiplicação(soma(10, 10), soma(20, 20)))


console.log(soma(10, 40))

function nomeIdade (nome, idade) {
    return `Meu nome é ${nome} e tenho ${idade} anos de idade.`
}

console.log(nomeIdade("Vinícius", 20))