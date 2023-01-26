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


//CONST
const forma3 = 'quadrado';
const altura3 = 5;
const comprimento3 = 10;
let area3;

if (forma3 === 'quadrado') {
    area3 = altura3 * comprimento3;
} else {
    area3 = (altura3 * comprimento3) / 2;
}

console.log(area3)
