/*jshint esversion: 6 */
// Objeto SET (Conjunto de elementos)

let juegos = new Set(['League of Legends', 'Tekken', 'Overwatch']);
console.log(juegos);

juegos.add('Mini Metro'); // No se pueden añadir nuevos elementos iguales a los que ya están
console.log(juegos);
/* Añadir de nuevo no hace nada
juegos.add('Mini Metro');
console.log(juegos); */

// Borrar un elemento
juegos.delete('Tekken');
console.log(juegos);

// Iterar con un for...of
for (juego of juegos) {
  console.log(juego);
}

// Iterar con .next()
// .values() te devuelve un objeto Symbol.Iterator
var iterator = juegos.values();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());


// Borrar los elementos del SET
juegos.clear();
console.log(juegos);

// WEAKSET

let persona1 = {
  nombre: 'Paco',
  edad: 22
};
let persona2 = {
  nombre: 'Laura',
  edad: 23
};

let personas = new WeakSet([persona1, persona2]);
console.log(personas);