// Resolução

var numeroSorteado = 42;
let totalSorteados = 7;
const TOTAL_NUMEROS = 75;
let nomeDoEvento = "Bingo da Comunidade";

let sobraNumeros = TOTAL_NUMEROS - totalSorteados; // aritmético
let terminou = totalSorteados === TOTAL_NUMEROS; // relacional

console.log(
  "Nome do Evento: " + nomeDoEvento + " | Total sorteados: " + totalSorteados,
);
console.log("Número sorteado: " + numeroSorteado);
console.log("Falta sortear: " + sobraNumeros + " " + "números");
console.log("Acabou: " + terminou);
