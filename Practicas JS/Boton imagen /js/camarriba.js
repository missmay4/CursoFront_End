function toggle(mySw) {
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

    return mySW;
  }

}