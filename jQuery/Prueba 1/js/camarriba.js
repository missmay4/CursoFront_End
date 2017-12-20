/*
$( SELECTOR ) .JFUNCION( PARAMETROS);
Estructura de jQuery

PARAMETROS:
  - Strings
  - Funciones anonimas, que actuan como respuesta al evento capturado ('callbacks')
*/

//Cuando la pagina este lista (cuando el arbol DOM este construido)

$(document).ready(function() {

  $("#myButton").click(function() {

    if ($(this).hasClass("enabledButton") == false) {
      // 1) El boton cambie a verde y a ON
      /*$(this).css("background-color", "#27ae60"); // this es el elemento que va a cambiar
      $(this).css("border", "1px solid grey");*/
      $(this).addClass("enabledButton");
      $(this).html("ON");

      // 2) La imagen cambia su src
      $("#myImage").attr("src", "img/bb8.jpg");

    } else {
      $(this).removeClass("enabledButton");
      /*$(this).css("background-color", "#c0392b"); // this es el elemento que va a cambiar
      $(this).css("border", "inherit"); // inherit vuelve a las propiedades anteriores*/
      $(this).html("OFF");

      // 2) La imagen cambia su src
      $("#myImage").attr("src", "img/kylo2.jpg");
    }


  });

});



/*
function toggle() {
  var mySwitch = true;
  var myTarget = document.getElementById("myButton");
  var myImage = document.getElementById("myImage");

  if (mySwitch == true) { // Si el boton está en OFF
    mySwitch = false; // Enciende el interruptor

    myTarget.style.backgroundColor = "#27ae60"; // Cambia el color del botón
    myTarget.innerHTML = "ON"; // Cambia el texto del botón
    myImage.src = "img/simpsons.jpg"; // Cambia la imagen

  } else {
    mySwitch = true; // Apaga el interruptor

    myTarget.style.backgroundColor = "#c0392b"; // Cambia al color anterior
    myTarget.innerHTML = "OFF"; // Vuelve a poner el OFF
    myImage.src = "img/bears2.jpg"; // Vuelve a la imagen del principio

  }

} */
