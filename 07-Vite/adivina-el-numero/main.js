import "./style.css";

const inputNumero = document.getElementById("numero");
const botonAdivinar = document.getElementById("adivinar");
const mensaje = document.getElementById("mensaje");

const calcularNumeroSecreto = () => {
  return Math.floor(Math.random() * 100) + 1;
};

let numeroSecreto = calcularNumeroSecreto();
let timer = 5;

function handleTimer(timer) {
  mensaje.textContent = `¡Felicidades! ¡Adivinaste el número!, reiniciando la partida en ${timer} segundos`;
  if (timer === 0) {
    numeroSecreto = calcularNumeroSecreto();
    mensaje.textContent = "Partida reiniciada."
    return;
  }
  timer--;
  setTimeout(function () {
    handleTimer(timer);
  }, 1000);
}

botonAdivinar.addEventListener("click", () => {
  const numeroJugador = parseInt(inputNumero.value);

  if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
    mensaje.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
  } else if (numeroJugador === numeroSecreto) {
    handleTimer(timer);
  } else if (numeroJugador < numeroSecreto) {
    mensaje.textContent = "El número es más alto.";
  } else {
    mensaje.textContent = "El número es más bajo.";
  }
});
