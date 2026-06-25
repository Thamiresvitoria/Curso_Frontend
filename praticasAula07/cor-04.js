//GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
// 4. Receba uma cor digitada pelo usuario e exiba a instrução

const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite uma cor: ", function(cor) {
    let corDigitada = cor.toLowerCase().trim();

    if (corDigitada === "verde"){
        console.log("Siga em frente.");
    }
    else if (corDigitada === "amarelo"){
        console.log("Atenção, reduza a velocidade.");
    }
    else if (corDigitada === "vermelho"){
        console.log("Pare.");
    }
    else{
        console.log("Cor inválida.");
    }
    rl.close();
});