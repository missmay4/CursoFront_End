/* ------------------ INITIALIZE ------------------ */

var mySwitch = true;

function toggle() {

	var myTarget = document.getElementById("myButton");

	// Si el INTERRUPTOR está apagado...
	if( mySwitch == true )
	{
		mySwitch = false; // ... encienda el INTERRUPTOR

		myTarget.style.backgroundColor = "darkgreen";
		//myTarget.style.opacity = "0.8";
		myTarget.innerHTML = "ON";
	}

	// Si no...
	else
	{
		mySwitch = true; // ... apague el INTERRUPTOR

		myTarget.style.backgroundColor = "darkred";
		myTarget.innerHTML = "OFF";
	}
}