//1. Exiba os números de 1 a 10 utilizando while.

let numero = 0;

while ( numero < 10){
  numero++;
  console.log(numero);
}

console.log("-".repeat(20));

//2. Exiba os números de 10 até 1 utilizando while.

let numeroMenos = 10;

while (numeroMenos >= 1 ){
  numeroMenos--;
  console.log(numeroMenos);
}

console.log("-".repeat(20));

//3. Exiba apenas os números pares de 2 a 20 utilizando while.

let numeroPar = 2;

while (numeroPar < 20 ){
  if (numeroPar % 2 === 0){
  console.log("Os números pares são: " + numeroPar)
  }
}
//4. Calcule e exiba a soma dos números de 1 a 100 utilizando while.
//5. Receba um número e exiba a tabuada desse número (1 a 10) utilizando while.
//6. Receba uma senha e continue pedindo outra enquanto ela for diferente de '1234'. Ao acertar, exiba 'Acesso permitido'.
//7. Receba um número e exiba uma contagem regressiva desse número até 0 utilizando while.
