function minhaFuncao(parametro) {
    // bloco de código
}

minhaFuncao("parametro");

// expressão de função

// console.log(soma(10, 10))

console.log(apresentar())

function apresentar() {
    return "Olá!"
}


// Pelo motivo de a função estar sendo declarada em uma const, o console não consegue ler. Então dá erro de referência.
console.log(soma(1, 2))

const soma = function(numero1, numero2) {
    return numero1 + numero2
}

