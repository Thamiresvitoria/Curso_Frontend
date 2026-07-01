// Exemplo de função para somar dois números

/* function somar(numero1, numero2) {
  return numero1 + numero2;
} 

let resultado = somar(5, 10);

console.log("O resultado da soma é: " + resultado);

console.log("-".repeat(30));

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
} 

let resultado = multiplicar(5, 10);

console.log("O resultado da multiplicação é: " + resultado);


function casemiro(gol){
  if (gol > 0){
    return "Slc, joga muito"
  }
  else{
    return "tira esse veio"
  }
  
  console.log(casemiro(0));
  console.log(casemiro(1));
  
  }; */

  // Atividade 

  // Titulo
  function titulo(){
    return console.log("Bem vindo ao bingo da turma 130")
  };


  // Menu
  function menu(){
    let opcao = 2;

    while ( opcao === opcao){
      let opcao1 = "1 - Ver cardapio";
      let opcao2 = "2 - Ver bebidas";
      let opcao3 = "3 sair";

      if (opcao === 1){
        console.log("O cardapio e...")
        break;
      }
      else if (opcao === 2){
        console.log("as bebidas são.. ")
        break;
      }
      else {
        console.log("Saindo")
        break;
      }
    }
  };

  // Média
  function calcularMedia(nota1, nota2){
    return (nota1 + nota2)/2
  };
  
  let resultado = calcularMedia(4,7);
  console.log("A média é:" + resultado);

  // Criar um bingo usando repetição.


titulo();
menu();

function thamires() {
  console.log("Thamires gosta de cabeludinho");
}

thamires();