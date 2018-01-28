describe('Functional module', function(){

	it('calculates Fibonacci iteratively', function(){
		// expect (mi funcion al testear).operador(salida);
		expect(fibonacciIterativo(9)).toEqual(34);
	});

	it('calculates Fibonacci recursively', function(){
		expect(fibonacciRecursivo(9)).toEqual(34);
	});
});

