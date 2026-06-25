//GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
// Receba um número do usuário e responda:

const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
rl.question("Digite um número: ", function(numero){
  if (numero < 1 || numero > 75){
    console.log("Número inválido!");
  }
  else if( numero >= 1 && numero <= 25){
    console.log("Está na faixa B");
  }
  else if (numero >= 26 && numero <= 50){
    console.log("Está na faixa I");
  }
  else if (numero >= 51 && numero < 75){
    console.log("Está na faixa N");
  }
 
  rl.close();
});