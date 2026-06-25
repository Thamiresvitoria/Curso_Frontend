// Vidas de um jogador em um jogo.

let vidas = 3;

while(vidas > 0){
  console.log("jogando..");
  vidas--; // é igual a vidas = vidas - 1;
}

console.log("Gamer over!");
console.log("-".repeat(20));

// Atividades, enquanto não fizer as atividades repete o loop.

let repeticoes = 1;

while (repeticoes <= 10){
    console.log("Fazendo repetições: " + repeticoes);
    repeticoes++; //é igual a repeticoes = repeticoes + 1;
}

console.log("Exercício concluído! ");
console.log("-".repeat(20));


// Assistindo series

let episodio = 1;
let totalEpisodios = 5;

while (episodio <= totalEpisodios){ // checando se os episodios é igual ou menor que o total de episodios.
  episodio++;
  console.log("Assistindo episodio: " + episodio);
}

console.log("Série finalizada!");
console.log("-".repeat(20));


// Tentativas login

let tentativa = 1;

while (tentativa <= 3){
  console.log("Tentativa de login n°: " * tentativa);
  tentativa++;
}

console.log("Número máximo de tentativas atingidas!");
console.log("-".repeat(20));


// Controle de estoque 

let estoque = 10;

while(estoque > 0){
  console.log("Produto vendido.");
  estoque--;
}

console.log("Estoque esgotado!");
console.log("-".repeat(20));