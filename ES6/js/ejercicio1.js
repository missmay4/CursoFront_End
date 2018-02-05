/* Ejercicio ES6: Utilizando el operador "..." crear una función que te calcule el promedio de los argumentos(parametros) que se le pasan a la funcion y te los muestre por consola

- Numero de parámetros indeterminados. Usar operador '...'
- Usar el nuevo bucle for:
  for (const i of args){
      codigo del for
  }
- En la llamada a la funcion, pasar por parámetro un array de valores usando el operador '...' */




function promedio(...args) {
  let suma = 0;
  let average = 0;
  if (args.length > 0) {
    for (const num of args) {
      suma += num;
    }
    average = suma / args.length;
  }

  return average;
}

console.log("Calcula el promedio");
var valores = [4, 2, 12, 9, 3, 6, 64, 44];
console.log(promedio(...valores));