/*
  GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
                ATIVIDADE PRÁTICA - 7 ATIVIDADES 
*/ 

// Receba o peso e a altura do usuário, calcule o IMC e classifique:


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite seu peso: ", function(peso){
  rl.question("Digite a sua altura: ", function(altura){
    let calculoIMC = peso/(altura*altura);

    if (calculoIMC < 18.5){
      console.log("Você está baixo do peso");
    }
    else if(calculoIMC >= 18.5 && calculoIMC <= 24.9){
      console.log("Você está com peso normal")
    }
    else if(calculoIMC >= 25 && calculoIMC <= 29.9){
      console.log("Você está com sobrepeso")
    }
    else if(calculoIMC <= 0){
      console.log("Número inválido!");
    }
    else {
      console.log("Você está com obesidade");
    }


    rl.close()
  })
})


