// Usando if e else

console.log(5 > 20 && 5 < 2); // false

// our || é ou
console.log(5 === 5 || 5 === "5" );

// not ! é falso
console.log(!(20 > 50) );


// && =  é, || = ou, ! = não e

// --------------------------------------------------------------------------------

// verificar se 10 é maior que cinco ou 10 é menor que 20
console.log("-".repeat(30))
console.log("Atividade Prática")
console.log(10 > 5 && 10 < 20); 

// verificar se 15 é menor que 10 ou 10=5 é igual a 15
console.log(15 < 10 || 15 === 15);

console.log(10 > 5 && 10 < 20);

// verificar se 30 não é igual e 40
console.log(!(30 === 40));

// verificar se 8 não é igual a 3 e 12 e menor que 5
console.log(!(8 > 3 && 12 < 5));

// verificar se 25 é maior que 20 ou 10 é maior que 50
console.log(25 > 20 || 10 > 50);

// --------------------------------------------------------------------------------

console.log("-".repeat(30));
console.log("Pratica com variaveis");
// Armazenar as condicões em variaveis
// Armazena a seguinte condição: verificar se 15 é menor que 10 ou 10=5 é igual a 15
let questao01 = 15 < 10 || 15 === 15;

// exibir a verificação

console.log(questao01);

// Armazena a seguinte condição: Verifica se 10 é maior que cinco e 10 e menor que 20
let questao02 = 10 > 5 && 15 === 15;

// exibir a verificação

console.log(questao02);

// Armazena a seguinte condição: verificar se 8 não é igual a 3 e 12 e menor que 5
let questao03 = !(8 > 3 && 12 < 5);

//exibi a verificação
console.log(questao03);

// Armazena a seguinte condição: verificar se 30 não é igual e 40
let questao04 = !(30 === 40);

// exibir a verificação
console.log(questao04);

// Armazena a seguinte condição: verificar se 25 é maior que 20 ou 10 é maior que 50
let questao05 = 25 > 20 || 10 > 50;

// exibir a verificação

console.log(questao05);
