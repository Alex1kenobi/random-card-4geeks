/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//botonHtml.onclick = function() {
window.onload = function() {
  var palos = ["♦", "♥", "♠", "♣"];
  var numero = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K"];

  function generarRandom(array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
  }

  ///setTimeout(generarRandom, 4000);

  var quierounpalo = generarRandom(palos);

  var paloHtml = document.querySelector(".palocarta1");
  var numeroHtml = document.querySelector(".numerocarta");
  var paloHtlm2 = document.querySelector(".palocarta2");

  console.log(quierounpalo);

  paloHtml.innerHTML = quierounpalo;
  numeroHtml.innerHTML = generarRandom(numero);
  paloHtlm2.innerHTML = quierounpalo;

  if (quierounpalo === "♥" || quierounpalo === "♦") {
    //este funciona también, pero para no volver a seleccionar el elemento.
    //document.getElementById("paloarriba").style.color = "red";
    //document.getElementById("paloabajo").style.color = "red";
    // así es más bonito
    paloHtml.style.color = "red";
    paloHtlm2.style.color = "red";
  } else {
    document.getElementById("paloarriba").style.color = "black";
    document.getElementById("paloabajo").style.color = "black";
  }

  //esto para generar carta random
  let botonHtml = document.querySelector(".boton");
  botonHtml.onclick = window.onload;

  //Timer para volver a generar la funcion
};
var timer = () => window.setInterval(window.onload, 3000);
timer();
