// Ejemplo JSON

var persona = {
  nombre: "David",
  apellidos: "Carvajal Garrido",
  edad: 35,
  habilidades: ["HTML", "CSS", "JS"],
  formacion: {
    carrera: "informatica",
    master: "del universo"
  },

  impartir: function(habilidad) {
    console.log("Ahora ya sabes " + habilidades[habilidad]);

  }

};

/* ------------------------- ABSTRACT ------------------------- */
var papelera = {
  // PROPIEDADES
  color: "#FABADA",
  basura: [], // Cantidad de objetos a meter, en este caso esta vacio y meteremos cosas con la funcion/metodo
  // METODOS
  meterUnaCosa: function(cosa) { // Recibir y guardar
    this.basura.push(cosa); //
  },
  sacarElDeLaPosicion: function(posicion) {
    if (basura[posicion] !== undefined) {
      return this.basura[posicion];

    } else {
      return false;
    }
  },

  sacarUnaCosa: function() { // Devolver el ultimo
    return this.basura.pop();

  }
};

/* ------------------------- OUTPUT ------------------------- */

papelera.meterUnaCosa("jamón");
papelera.meterUnaCosa("jeringuilla");



var unaCosa = "platano";
var otraCosa = "jeringuilla";
var otraCosaMas = "rotulador";

papelera.meterUnaCosa(unaCosa);

console.log();


if (3 == 3) {} // true.
if ("3" == "3") {} // true.
if (3 == "3") {} // true COMPARA EL VALOR
if (3 === "3") {} // false. COMPARA EL VALOR Y EL TIPO
if (3 !== "3") {} // true. No es identico ni por tipo ni valor