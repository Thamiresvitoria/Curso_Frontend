const readline = require('readline-sync');

let idade = readline.questionInt("Digite a sua idade: ");

if(idade < 16){
  console.log("Você não pode votar.");
}
else if( idade >= 16 || idade <= 17){
  console.log("O seu voto é opcional.")
}
else if (idade >=18 || idade <= 69){
  console.log("É obrigatório votar!")
}
else{
  console.log("Seu voto é opcional")
}