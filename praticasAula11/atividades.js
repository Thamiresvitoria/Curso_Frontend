// 1. Contagem simples
// Exiba os números de 1 a 15 utilizando um for.

for ( let i = 1; i <=15; i++){
  console.log(i);
}

console.log("\n");
console.log("-".repeat(30));
console.log("\n");

// 2. Números pares
// Exiba apenas os números pares de 0 a 30.

for ( let i = 0; i <= 30; i ++ ){
  if ( i % 2 === 0){
  console.log("Os números pares são: " + i);
}
}

console.log("\n");
console.log("-".repeat(30));
console.log("\n");

// 3. Números ímpares
// Exiba apenas os números ímpares de 1 a 25.

for ( let i = 1; i <=25; i++){
  if ( i % 2 !== 0){
  console.log("Os números ímpares: " + i);
  }
}

console.log("\n");
console.log("-".repeat(30));
console.log("\n");

// 4. Múltiplos
// Exiba todos os múltiplos de 5 entre 5 e 50.

for (let  i = 1; i <=50; i++){
  if ( i % 5 === 0){
  console.log("Os multiplos de 5 são: " + i);
  }
}

console.log("\n");
console.log("-".repeat(30));
console.log("\n");

// 5. Média de notas
// Calcule e exiba a média de 4 notas utilizando um for.

let notas = [3, 4, 10, 3];
let soma = 0;

for ( let i = 0; i < notas.length; i++){
  soma += notas[i];

}

let media = soma/ notas.length; // é o tamanho do array.

console.log("A media é: " + media);


