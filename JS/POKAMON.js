let ataqueJugador;
let ataqueEnemigo;
let resultadoCombate;
let vidasJugador = 100;
let vidasEnemigo = 100;

function iniciarJuego() {
  let BotonMascotaJugador = document.getElementById("boton-mascota");
  BotonMascotaJugador.addEventListener("click", selecceionarMascota);

  let ReiniciarJuego = document.getElementById("boton-reiniciar");
  ReiniciarJuego.addEventListener("click", reiniciar);
}

function selecceionarMascota() {
  let InputFireye = document.getElementById("fireye");
  let InputWaspy = document.getElementById("waspy");
  let InputSapoperro = document.getElementById("sapoperro");
  let InputAirx1 = document.getElementById("airx1");
  let spamMascotaJugador = document.getElementById("mascota-jugador");
  let sectionMascota = document.getElementById("elije-mascota");
  let sectionataques = document.getElementById("ATACA");
  if (InputFireye.checked) {
    spamMascotaJugador.innerHTML = "FIREYE";
  } else if (InputWaspy.checked) {
    spamMascotaJugador.innerHTML = "WASPY";
  } else if (InputSapoperro.checked) {
    spamMascotaJugador.innerHTML = "SAPOPERRO";
  } else if (InputAirx1.checked) {
    spamMascotaJugador.innerHTML = "AIRX1";
  } else {
    alert("alije tu mascota");
  }

  sectionataques.classList.remove("hidden");
  sectionMascota.classList.add("hidden");

  MascotaEnemigo();
}
function MascotaEnemigo() {
  let MascotaAleatoria = numeroAleatorio(1, 4);
  let spamMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (MascotaAleatoria == 1) spamMascotaEnemigo.innerHTML = "FIREYE";
  else if (MascotaAleatoria == 2) spamMascotaEnemigo.innerHTML = "WASPY";
  else if (MascotaAleatoria == 3) spamMascotaEnemigo.innerHTML = "SAPOPERRO";
  else {
    spamMascotaEnemigo.innerHTML = "AIRX1";
  }
  Botones();
}
function Botones() {
  let InputFireye = document.getElementById("fireye");
  let InputWaspy = document.getElementById("waspy");
  let InputSapoperro = document.getElementById("sapoperro");
  let InputAirx1 = document.getElementById("airx1");

  if (InputFireye.checked) {
    crearBotones("Lluvia De Lava", "Rocas Calientes", "Coletazos");
  } else if (InputWaspy.checked) {
    crearBotones("Lluvia acida", "Maremoto", "Coletazos");
  } else if (InputSapoperro.checked) {
    crearBotones("Lluvia de rocas", "Terremoto", "Coletazos");
  } else if (InputAirx1.checked) {
    crearBotones("Tornado", "Remolino", "Coletazos");
  }

  addBattleListeners();
}

function addBattleListeners() {
  let ataque1 = document.getElementById("ataque1");
  let ataque2 = document.getElementById("ataque2");
  let ataque3 = document.getElementById("ataque3");

  ataque1.addEventListener("click", () => {});
  ataque2.addEventListener("click", () => {});
  ataque3.addEventListener("click", () => {});
}

function crearBotones(ataque1, ataque2, ataque3) {
  const seccionBotones = document.getElementById("Botones-Mascotas");
  const botones = document.createElement("p");
  botones.innerHTML = `
    <button id="ataque1">${ataque1}</button>
    <button id="ataque2">${ataque2}</button>
    <button id="ataque3">${ataque3}</button>
  `;

  seccionBotones.appendChild(botones);
}

//ataque aletorio FIREYE
function ataquealeatorioF() {
  let poderAleatorio = numeroAleatorio(1, 4);

  if (poderAleatorio == 1) {
    ataqueEnemigo = "lluvia De Lava";
  } else if (poderAleatorio == 2) {
    ataqueEnemigo = "Rocas Calientes";
  } else if (poderAleatorio == 3) {
    ataqueEnemigo = "Coletazoz";
  } else if (poderAleatorio == 4) {
    ataqueEnemigo = "Escudo";
  }
  combate();
}
//ataque aletorio WASPY
function ataquealeatorioW() {
  let poderAleatorio = numeroAleatorio(1, 4);

  if (poderAleatorio == 1) {
    ataqueEnemigo = "lluvia Acida";
  } else if (poderAleatorio == 2) {
    ataqueEnemigo = "Rocas Calientes";
  } else if (poderAleatorio == 3) {
    ataqueEnemigo = "Coletazoz";
  } else if (poderAleatorio == 4) {
    ataqueEnemigo = "Escudo";
  }
  combate();
}

//ataque aletorio Sapoperro
function ataquealeatorioS() {
  let poderAleatorio = numeroAleatorio(1, 4);

  if (poderAleatorio == 1) {
    ataqueEnemigo = "lluvia De Rocas";
  } else if (poderAleatorio == 2) {
    ataqueEnemigo = "Terremoto";
  } else if (poderAleatorio == 3) {
    ataqueEnemigo = "Coletazoz";
  } else if (poderAleatorio == 4) {
    ataqueEnemigo = "Escudo";
  }
  combate();
}
//ataque aletorio Airx1
function ataquealeatorioA() {
  let poderAleatorio = numeroAleatorio(1, 4);

  if (poderAleatorio == 1) {
    ataqueEnemigo = "Tornado";
  } else if (poderAleatorio == 2) {
    ataqueEnemigo = "Ventisca";
  } else if (poderAleatorio == 3) {
    ataqueEnemigo = "Coletazoz";
  } else if (poderAleatorio == 4) {
    ataqueEnemigo = "Escudo";
  }
  combate();
}
function combate() {
  let spamvidasEnemigo = document.getElementById("vidas-enemigo");
  let spamvidasJugador = document.getElementById("vidas-jugador");

  if (ataqueJugador == ataqueEnemigo) resultadoCombate = "EMPATE";
  else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    resultadoCombate = "GANASTE";
    vidasEnemigo--;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    resultadoCombate = "GANASTE";
    vidasEnemigo--;
  } else if (ataqueJugador == "AIRE" && ataqueEnemigo == "AGUA") {
    resultadoCombate = "GANASTE";
    vidasEnemigo--;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AIRE") {
    resultadoCombate = "GANASTE";
    vidasEnemigo--;
  } else {
    resultadoCombate = "PERDISTE";
    vidasJugador--;
  }
  spamvidasJugador.innerHTML = vidasJugador;
  spamvidasEnemigo.innerHTML = vidasEnemigo;
  alertas();
  revicionVidas();
}

function alertas() {
  let seccionMensajes = document.getElementById("mesajes");

  let avisos = document.createElement("p");
  avisos.innerHTML =
    "Tu mascota ataco con.  " +
    ataqueJugador +
    "  la mascota de el enemigo ataco con, " +
    ataqueEnemigo +
    ", " +
    resultadoCombate;

  seccionMensajes.appendChild(avisos);
}

function mensajefinal(resultadofinal) {
  let sectionReiniciar = document.getElementById("REICIAR");
  sectionReiniciar.style.display = "block";
  let sectionataques = document.getElementById("ATACA");
  sectionataques.style.display = "none";

  let seccionMensajes = document.getElementById("mesajes");

  let avisos = document.createElement("p");
  avisos.innerHTML = resultadofinal;

  seccionMensajes.appendChild(avisos);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;
  let botonAire = document.getElementById("boton-aire");
  botonAire.disabled = true;
}

function revicionVidas() {
  if (vidasJugador == 0) {
    mensajefinal("PERDISTE 🫤");
  } else if (vidasEnemigo == 0) {
    mensajefinal("GANASTE 😁");
  }
}

function reiniciar() {
  location.reload();
}
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego);
