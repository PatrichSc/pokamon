let ataqueJugador;
let ataqueEnemigo;
let resultadoCombate;
let vidasJugador = 100;
let vidasEnemigo = 100;

function iniciarJuego() {
  let sectionataques = document.getElementById("ATACA");
  sectionataques.style.display = "none";
  let sectionReiniciar = document.getElementById("REICIAR");
  sectionReiniciar.style.display = "none";
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
  sectionataques.style.display = "block";

  if (InputFireye.checked) {
    spamMascotaJugador.innerHTML = "FIREYE";
    sectionMascota.style.display = "none";
  } else if (InputWaspy.checked) {
    spamMascotaJugador.innerHTML = "WASPY";
    sectionMascota.style.display = "none";
  } else if (InputSapoperro.checked) {
    spamMascotaJugador.innerHTML = "SAPOPERRO";

    sectionMascota.style.display = "none";
  } else if (InputAirx1.checked) {
    spamMascotaJugador.innerHTML = "AIRX1";

    sectionMascota.style.display = "none";
  } else {
    alert("alije tu mascota");
    sectionMascota.style.display = "block";
  }

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
    crearBotonesF();
  } else if (InputWaspy.checked) {
    crearBotonesW();
  } else if (InputSapoperro.checked) {
    crearBotonesS();
  } else if (InputAirx1.checked) {
    crearBotonesA();
  }
}

function crearBotonesF() {
  let seccionBotones = document.getElementById("Botones-Mascotas");
  let botones = document.createElement("p");
  botones.innerHTML =
    " <button>Luvia De Lava</button> " +
    " <button>Escupir Fuego</button> " +
    " <button>Coletazos</button> ";

  seccionBotones.appendChild(botones);
}
function crearBotonesW() {
  let seccionBotones = document.getElementById("Botones-Mascotas");
  let botones = document.createElement("p");
  botones.innerHTML =
    " <button>Lluvia acida</button> " +
    " <button>Maremoto</button> " +
    " <button>Coletazos</button> ";

  seccionBotones.appendChild(botones);
}

function crearBotonesS() {
  let seccionBotones = document.getElementById("Botones-Mascotas");
  let botones = document.createElement("p");
  botones.innerHTML =
    " <button>Lluvia de rocas</button> " +
    " <button>Terremoto</button> " +
    " <button>Coletazos</button> ";

  seccionBotones.appendChild(botones);
}
function crearBotonesA() {
  let seccionBotones = document.getElementById("Botones-Mascotas");
  let botones = document.createElement("p");
  botones.innerHTML =
    " <button id = "Ataque1A">Tornado</button> " +
    " <button id = "Ataque2A">Remolino</button> " +
    " <button id = "Ataque3A">Coletazos</button> ";

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
