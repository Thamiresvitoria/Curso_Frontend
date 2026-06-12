var numeroSorteado = 42;
let totalSorteados = 7;
const TOTAL_NUMEROS = 75;
let nomeDoEvento = "Bingo da Comunidade";

/*
if (totalSorteados <= 75 && numeroSorteado === numeroSorteado) {

  TOTAL_NUMEROS - totalSorteados;

  console.log("Nome do Evento: " + nomeDoEvento);
  console.log("Número sorteado: " + numeroSorteado);
  console.log("Números restantes: " + (TOTAL_NUMEROS - totalSorteados));
  console.log("Acabou: Não");

} 
  else if (totalSorteados === 0) {
      console.log("Nome do Evento: " + nomeDoEvento);
      console.log("Número sorteado: " + numeroSorteado);
      console.log("Números restantes: " + (TOTAL_NUMEROS - totalSorteados));
      console.log("Acabou: Sim");

} 
  else {
  console.log("Acabou: Sim");
}

*/


let sobraNumeros = TOTAL_NUMEROS - totalSorteados;
let terminou = "Sim";
let terminou2 = "Não";

console.log("Nome do Evento: " + nomeDoEvento);
console.log("Número sorteado: " + numeroSorteado);
console.log("Números restantes: " + sobraNumeros);
console.log("Acabou: " + terminou2);




