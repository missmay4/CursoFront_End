
// Fibonacci con un algoritmo iterativo
var resultado = 0;
var resAnterior = 0;
var resAnteriorCopia = 0;

for(var i = 0; i < 5; i++){
	if (i == 0){
		resultado++;
	}
	else {
		resAnteriorCopia = resAnterior; // Guardo una copia del anterior
		//resultado = resultado + anterior;
		resultado += resAnteriorCopia; // Actualizo mi nuevo resultado
		resAnterior = resAnteriorCopia; // Restauro la copia en el anterior
	}
}

/* ------------------------------------------------------------------*/

// Recursividad

Paso base (P0): x = 0;
Paso recursivo (Pn): x = x + 1

x0 = 0
x1 = x0 + 1 = 0 + 1 = 1
x2 = x1 + 1 = x0 + 1 + 1 = 0 + 1 + 1 = 2


yo = yo + misCircustancias;
yo = (yo + misCircustancias) + misCircustancias;
yo = ((((( yo + misCircustancias) + misCircustancias) + misCircustancias) + misCircustancias) + misCircustancias) + misCircustancias; 

// Programacion funcional, unicamente con funciones. 

/* PASO BASE:
X0 = 0 -> 1
X1 = 1 -> 1 */

/* PASO RECURSIVO: 
Xi = Xi - 1 + xi - 2
(i > 2) */

/* function fibonacci (paso, resAnterior, resAntAnterior){
	// Paso base
	if (paso == 0 || paso == 1){
		//return 1;
		resSiguiente = 1;
	}
	else { // Paso recursivo
		// return resAnterior + resAntAnterior;
		resSiguiente = resAnterior + resAntAnterior;
	}

	return resSiguiente;
} */

function fibonacci (paso){
	if (paso == 0){ // Paso base 0
		return 0;
	}
	else if (paso == 1) { // Paso base 1
		return 1;
	}
	else {
		// Paso recursivo
		return fibonacci (paso - 1) + fibonacci (paso - 2);
	}
}
// 0, 1, 1, 2, 3, 5, 8, 13, ...
console.log(fibonacci(6)); // 8