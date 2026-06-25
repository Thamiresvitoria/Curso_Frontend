/*
  GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
                ATIVIDADE PRÁTICA - 7 ATIVIDADES 
*/ 

// Receba a hora atual (0 a 23) e informe o turno:

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a area: ", function(hora){

  if (hora >= 0 && hora <=5){
    console.log("Madrugada");
  }
  else if(hora >= 6 && hora <= 11){
    console.log("Manhã")
  }
  else if(hora >= 12 && hora <= 17){
    console.log("Tarde");
  }
  else if (hora >= 18 && hora <= 23){
    console.log("Noite")
  }
  else {
    console.log("hora inválida!")
  }
  
  rl.close()
})