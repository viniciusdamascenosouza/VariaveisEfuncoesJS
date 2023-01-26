//VAR

var altura = 5;
var comprimento = 7;

var area = altura * comprimento;

//var pode ser declarada depois, mas não vejo vantagem
// = altura * comprimento;
//var ;

console.log(area)


//LET

let forma = 'triângulo'
let altura2 = 10;
let comprimento2 = 20;

let area2 = altura2 * comprimento2;

if(forma === 'retângulo') {
    area2 = altura2 * comprimento2
} else{
    area2 = (altura2 * comprimento2) / 2
}

console.log(area2);