//GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA

const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 1. Receba a idade do usuario e classifique:

rl.question("Qual sua idade? ", function(idade) { 

       if (idade <= 12){
        console.log("Você é uma criança.");}

     else if (idade >=13 && idade <=17){
        console.log("Você é um adolescente.");

    } else if (idade >=18 && idade <=59){
        console.log("Você é um adulto.");

    } else if (idade >=60){
        console.log("Você é um idoso.");

    } else if (idade <=0 || idade >120){
        console.log("A idade é inválida.");
    
    }
});

 rl.close();

