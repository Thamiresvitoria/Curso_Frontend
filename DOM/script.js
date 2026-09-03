let contador = 0;

const numero = document.querySelector("#contador");
const diminuir = document.querySelector("#menos");
const aumentar = document.querySelector("#mais");

aumentar.addEventListener("click", () =>{
  contador++;
  numero.textContent = contador;
})

diminuir.addEventListener("click", () =>{
 
  if (contador === 0 || contador <= 0) {
    numero.textContent = 0;
  }
  else{
     contador--;
  }

  numero.textContent = contador;
})