var numeros;

for (numeros = 1; numeros <= 100; numeros++){
	if (numeros % 3 == 0 && numeros % 5 == 0){
		console.log("FIZZBUZZ");
	} else if (numeros % 3 == 0){
		console.log("FIZZ");
	} else if (numeros % 5 == 0){
		console.log("BUZZ");
	} 

	if (numeros % 7 == 0){
		console.log("PUM");
	} else if (numeros % 21 == 0){
		console.log("FIZZPUM");
	}

	/* if (numeros % 105 == 0){
		console.log("FIZZBUZZPUM")
	} */

	else {
		console.log(numeros);
	}
}

/* divisible 7 pum, y por 105 fizzbuzzpum */
