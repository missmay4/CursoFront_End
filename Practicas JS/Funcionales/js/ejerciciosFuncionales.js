/* Ejercicios
	** Usar paso base / recursivo
	** Solo un console.log por funcion
*/

// Ejercicio 1: Pintar por consola la funcion factorial de un numero dado (factorial(numero));

function factorial (num){
	if (num == 0 || num == 1 ){ // Paso base 0
		return 1;
	}
	else {
		return num * (factorial(num - 1));
	}
}
console.log("Ejercicio 1: " + factorial(4));

// Ejercicio 2: Funcion gritar a la que le pasas un numero y una letra (gritar(numero, letra)) que pinta por consola la letra * 2 - gritar (3, "a") -> aaaaaa!

function gritar (num, letra){
	if (num <= 1){
		return ;
	}
	else {
		return letra + (gritar(num + letra));
	}
}

console.log("Ejercicio 2: " + gritar(4, "a"));


// Ejercicio 3: Multipop: Le pasas un array y una cantidad de "golpes"(multipop([lista], golpes)) y le quita tantos elementos como golpes le indiques. 

function multiPop(lista, golpes){

}

console.log("Ejercicio 3: " + multiPop([4, 8, 12, 44], 2));
