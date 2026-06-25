//GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA


const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//02. Receba o valor de uma compra e informe o desconto:

rl.question("Qual o valor da compra? ", function(valor) {

    if (valor <= 50) {
        console.log("Valor final: R$ " + valor);

    } else if (valor >= 51 && valor <= 100) {
        console.log("Valor final: R$ " + (valor * 0.9) + " (10% de desconto)");

    } else if (valor > 100 && valor <= 200) {
        console.log("Valor final: R$ " + (valor * 0.8) + " (20% de desconto)");

    } else if (valor > 200) {
        console.log("Valor final: R$ " + (valor * 0.7) + " (30% de desconto)");

    }else {
        console.log("Valor inválido.");
    }

    rl.close();
});

