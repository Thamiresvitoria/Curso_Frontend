/*
  GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
                ATIVIDADE PRÁTICA - 7 ATIVIDADES 
*/ 

// RECEBA O VALOR DE UMA COMPRA E IMFORME O DESCONTO

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o valor da compra: ", function(valor){

  if(valor === 50){
    console.log("O valor da compra é: " + valor + "você não tem desconto!");
  }
  else if (valor >=  51 && valor <= 100){
    console.log("O valor da compra é: " + valor + " seu desconto é: " + valor - (valor*0.1) + " você tem 10% de desconto!");
  }
  else if(valor >=  101 && valor <= 200){
    console.log("O valor da compra é: " + valor + " seu desconto é: " + valor - (valor*0.2) + " você tem 20% de desconto!");
  }
  else if (valor >= 201){
    console.log("O valor da compra é: " + valor + " seu desconto é: " + valor - (valor*0.3) + " você tem 30% de desconto!");
  }
  rl.close();
});
