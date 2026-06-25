//GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
// 6.Receba o peso e altura do usuario, calcule o IMC e classifique:

const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite seu peso em kg: ", function(peso) {{
    rl.question("Digite sua altura em metros: ", function(altura) {
        const imc = peso / (altura * altura);
        if (imc < 18.5) {
            console.log("Abaixo do peso.");

        } else if (imc >= 18.5 && imc < 24.9) {
            console.log("Peso normal.");

        } else if (imc >= 25 && imc < 29.9) {
            console.log("Sobrepeso.");

        } else if (imc >= 30) {
            console.log("Obesidade.");

        } else {
            console.log("Obesidade.");
        }
        rl.close();
    })}});
