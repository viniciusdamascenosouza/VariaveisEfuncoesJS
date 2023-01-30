const nome = "Vinícius";
const sobrenome = "Damasceno";
const idade = 20;
const curso = "Sistemas da informação";
const instituicao = "PUC-MG";


// Usando o método de CONCATENAÇÃO ficaria assim:
//sendo uma forma péssima de ler, escrever e entender.
const apresentacao1 = "Meu nome é " + nome + " " + sobrenome + ", tenho " + idade + " anos de idade e estou cursando " + curso + " na " + instituicao + ".";
console.log(apresentacao1);


// TEMPLATE STRING
const apresentacao = `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos de idade e estou cursando ${curso} na ${instituicao}.`;
console.log(apresentacao)

