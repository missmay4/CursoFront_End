//ES6

function myArray() {
  return [1, 2, 6, 554, 76];
}
var q, w, e, r, t, y;

[q, w, , r, , y] = myArray();
console.log(y);

function ejecutarCodigo(x = 2, y = 44, z = 234) {
  console.log(x, y, z);

}
ejercutarCodigo(1, undefined, 5);

function Suma(...hola) {
  let resultado = 0;

  for (const i of hola) {
    resultado += i;
  }
  console.log(resultado);
}
// 2
Suma(1, 1);
// 14
Suma(2, 3, 4, 5);



var valores = [2, 345, 23, 33, 2, 11, 4677];

function suma2(a, b, ...args) {
  let resultado += i;

  for (const i of args) {
    resultado += i;
  }
  console.log(resultado);
}
// suma2(valores[0], valores[1]);
suma2(...valores);