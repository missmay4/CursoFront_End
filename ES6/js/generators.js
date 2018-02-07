/*jshint esversion: 6 */

function* dameEmpleado() {
  const empleados = ["Pepe", "Paco", "Pilar"];

  for (const nombre of empleados) {
    //console.log(nombre);
    yield nombre;
  }

  console.log("He terminado");
}


function iterar() {
  // Instancia un objeto
  const generaEmpleado = dameEmpleado();

  // valor del resultado
  // {value: "pepe", done: false}
  let resultado = generaEmpleado.next();
  let condicion = resultado.done;
  console.log(resultado);

  while (condicion == false) {
    resultado = generaEmpleado.next();
    condicion = resultado.done;
    if (resultado.value != undefined) {
      console.log(resultado);
    }

  }

}

iterar();






function* introduceDatos() {
  let datos = [];
  console.log(datos.length);

  datos.push(yield);
  console.log(datos);
  datos.push(yield);
  console.log(datos);
  datos.push(yield);
  console.log(datos);
  console.log("Finito");

}

// Ejecutar entrada de introduceDatos
let introduce_datos = introduceDatos();

introduce_datos.next();
introduce_datos.next("Ola");
introduce_datos.next(" ke");
introduce_datos.next(" ase");
introduce_datos.next(" primoh");