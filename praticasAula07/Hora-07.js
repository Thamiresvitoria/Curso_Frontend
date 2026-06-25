
//GRUPO 1 - DACYRROSE MELO, EVELLYN AMELIA, CAIO CESAR E THAMIRES VITORIA
//Receba a hora atual (0 a 23) e informe o turno;

const readline = require("readline");
const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

rl.question("Digite a hora atual: ", function(hora) {

    if (hora >= 0 && hora <=5){
        console.log("Esta de madrugada, va dormir!");

    } else if (hora >=6 && hora <=11){
        console.log("Esta de manhã, bom dia!");
    
    } else if (hora >=12 && hora <=17){
        console.log("Esta de tarde, boa tarde!"); 
    
    } else if (hora >=18 && hora <=23){
        console.log("Esta de noite, boa noite!"); 
    
    } else if (hora < 0 || hora > 23){
        console.log("Hora inválida.");
    } else {
        console.log("Hora inválida.");
    }

    rl.close();

});
