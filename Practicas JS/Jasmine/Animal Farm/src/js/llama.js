
// ------------------ Ejemplo puras ------------------

// SIN FUNCION PURA

var encendido = 0;

function alternar() {
	encendido = (encendido == 1) ? 0 : 1;
}

//alternar();

// CON FUNCION PURA

var encendido = 0;

function alternar(estado) {
	return (estado == 1) ? 0 : 1;
}

// Cambiar el interruptor
encendido = alternar(encendido);

// Otro ejemplo
function responder(mensaje) {

	if(mensaje == "42")
	{
		return "Correcto";
	}
	else
	{
		return "Incorrecto";
	}
}

var entradaUsuario = prompt("¿Cuál es el sentido de la vida?");

var salidaConsola = responder(entradaUsuario);
console.log(salidaConsola);

// ------------------ Ejemplo closures ------------------

function Calculadora(num1, num2, operacion) {

	var resultado = 0;

	function sumar() { // Closure
		resultado = num1 + num2;
	}
	function multiplicar() { // Closure
		resultado = num1 * num2;
	}
	function error() { // Closure
		resultado = "Aun no hemos implementado esa operacion";
	}

	switch(operacion) {
		case "SUMAR":
			sumar();
			break;
		case "MULT":
			multiplicar();
			break;
		default:
			error();
	}

	return resultado;
}

console.log( Calculadora(2, 3, "SUMAR") ); // 5
console.log( Calculadora(2, 3, "MULT") ); // 6
console.log( Calculadora(2, 3, "MOJON") ); // Aun no hemos implementado esa operacion

// ------------------ Ejemplo arguments ------------------

function sumar(arguments) {

	var res = 0;

	for (var i = 0; i < arguments.length; i++) {
		res += arguments[i];
	}

	return res;
}

//console.log(sumar(1)); // 1
//console.log(sumar(1,3,5,4)); // 13
