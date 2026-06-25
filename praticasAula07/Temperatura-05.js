//GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
// 5. Receba uma temperatura em graus celsius e classique:

const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite a temperatura em graus celsius: ", function(temperatura) {

    if (temperatura <=10){
        console.log("Esta frio.");
    }
    else if (temperatura >10 && temperatura <=20){
        console.log("Esta agradável.");
    }
    else if (temperatura >=21 && temperatura <=30){
        console.log("Esta quente.");
    }   
    else if (temperatura >30){
        console.log("Esta muito quente.");
    }
    else{
        console.log("Temperatura inválida.");
    }
    rl.close();
})