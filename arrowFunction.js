const apresentarArrow = (nome) => {
    return `Meu nome é ${nome}.`
}

console.log(apresentarArrow("Vinícius"))



// se a arrow function só tiver um parametro, não é necessário o uso de parenteses
const apresentarArrow1 = nome => `Meu nome é ${nome}.`

console.log(apresentarArrow1("Damasceno"))



//arrow functio com + de 1 linha de de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "somente número de 1 a 9";
    } else{
        return num1 + num2;
    }
}