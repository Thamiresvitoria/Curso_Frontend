/*
  GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
                ATIVIDADE PRÁTICA - 7 ATIVIDADES 
*/ 

//  Receba uma cor digitada pelo usuário e exiba a instrução:


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite uma cor: ", function(cor){

  let corDigitado = cor.toLowerCase().trim();

  if (corDigitado == "amarelo"){
    console.log("Atenção, reduza a velocidade");
  }
  else if (corDigitado == "vermelho"){
    console.log("Pare");
  }
  else if (corDigitado == "verde"){
    console.log("Pode seguir!");
  }
  else{
    console.log("Cor inválida")
  }

  rl.close();
})