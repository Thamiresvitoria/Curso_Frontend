/*
  GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
                ATIVIDADE PRÁTICA - 7 ATIVIDADES 
*/ 

// RECEBA A IDADE DO USUÁRIO

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite sua idade: ", function(idade){
  if (idade < 12){
    console.log("Você tem: " + idade + " Você ainda é criança!");
  }
  else if ( idade >=12 && idade <= 17){
    console.log("Você tem: " + idade + " Você é adolescente!");
  } 
  else if ( idade >=18 && idade <= 59){
    console.log("Você tem: " + idade + " Você é adulto!");
  } 
  else if ( idade <= 0 || idade >= 120){
    console.log("idade inválida!");
  }
  else{
    console.log("Você tem: " + idade + "Você é idoso!")
  };
  
  rl.close();
});