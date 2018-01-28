// PROGRAMACION FUNCIONAL

// ------------------------------------------
// Ejemplo 1: Operaciones aritméticas básicas
// ------------------------------------------

function sumarDosNumeros(num1, num2) {
	return num1 + num2;
}
function multiplicarDosNumeros(num1, num2) {
	var res = 0;

	for (var i = 0; i < num2; i++){
		res += 1;
	}

	return res;
	//return sumarDosNumeros(res, num1); Spy jasmine, verificar si una funcion ha sido llamada 

	//return num1 * num2;
}

// Sin programacion funcional
var resultado = sumarDosNumeros(2,3);
var resultado2 = multiplicarDosNumeros(resultado,4);
console.log(resultado2); // 20

// Con programacion funcional
console.log(multiplicarDosNumeros(sumarDosNumeros(2,3),4)); // 20

// --------------------------------
// Ejemplo 2: Sucesión de Fibonacci
// --------------------------------

// Sin programacion funcional (solución iterativa)
function fibonacciIterativo( paso ) {
	var resultado = 0;
	var resAnterior = 0;
	var resAnteriorCopia = 0;

	for(var i=0; i<paso; i++)
	{
		if(i == 0) {
			resultado++;
		}
		else
		{
			resAnteriorCopia = resAnterior; // Guardo una copia del anterior
			resultado += resAnteriorCopia; // Actualizo mi nuevo resultado
			resAnterior = resAnteriorCopia; // Restauro la copia en el anterior
		}
	}

	return resultado;
}

console.log(fibonacciIterativo(6)); // 8

// Con programacion funcional (solución recursiva)
/*
PASO BASE: 
X0: Si es el paso 0 devuelve 0
X1: Si es el paso 1 devuelve 1

PASO RECURSIVO:
Si es el paso 2 o más: Xi = Xi-1 + Xi-2
*/
function fibonacciRecursivo( paso ) {
	
	if( paso == 0 ) // Paso base 0
		return 0;
	else
	if( paso == 1 ) // Paso base 1
		return 1;
	else
		// Paso recursivo (2 o más)
		return fibonacciRecursivo(paso-1) +
		       fibonacciRecursivo(paso-2);
}

// 0, 1, 1, 2, 3, 5, 8, 13, ...
console.log(fibonacciRecursivo(6)); // 8