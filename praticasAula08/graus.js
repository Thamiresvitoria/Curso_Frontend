/*
  GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
                ATIVIDADE PRÁTICA - 7 ATIVIDADES 
*/ 

// Receba uma temperatura em graus Celsius e classifique:


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um grau: ", function(grau){

  if (grau < 10){
    console.log("Está frio!");
  }
  else if (grau >= 10 && grau <= 20){
    console.log("Está ameno");
  }
  else if(grau >=21 && grau <= 30){
    console.log("Está quente!");
  }
  else{
    console.log("Está muito quente!");
  }
  rl.close()
})