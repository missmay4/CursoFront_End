
var name = "Mayte"; // Nombre
// Fecha de nacimiento
var bornDay = 4; // Variable numerica para hacer calculos
var bornDayOutput = bornDay;
var bornMonth = 8; 
var bornMonthOutput = bornMonth;
var bornYear = 1991; 
// FIN Fecha de nacimiento
var bornPlace = "Las Palmas de GC"; // Lugar de nacimiento
// Fecha actual
var mainYear = 2017; // Año actual
var mainMonth = 12; // Mes actual
var mainDay = 5; // Día actual
// FIN Fecha actual
var age;

// Imprimir numeros de la fecha por consola con un 0 delante

if (bornDay < 10) {
	bornDayOutput = "0" + bornDay;
}

if (bornMonth < 10) {
	bornMonthOutput = "0" + bornMonth;
}

/* ----------------------------------------------------------------------------------------------------- */

/* -------------------- Caldular edad segun meses ----------------- */

if (mainMonth >= bornMonth) { // Si el mes en el que estamos es mayor o igual que el mes de nacimiento
  age = (mainYear - bornYear);
}

if (mainMonth < bornMonth) { // Si el mes en el que estamos es menor que el mes de nacimiento
  age = (mainYear - bornYear) - 1;
}

/* ----------------------------------------------------------------------------------------------------- */


/*if ((mainYear % 4) && (mainYear % 100 != 0) || (mainYear % 400 == 0)) { } // calcular año bisiesto */


/* ------------------- Días vividos forma manual -------------------- */

var normalYear = 365; // Días totales de cada año normal
var birthYear = 150; // Restados días anteriores a mi cumpleaños
var leapYear = 366; // Días totales de cada año bisiesto
var daysNow = 338; // Días totales en 2017 a día 5 de Diciembre

var diasVividos = (20 * normalYear) + (6 * leapYear) + daysNow;

/* ----------------------------------------------------------------------------------------------------- */

/* ----------------------- OUTPUT --------------------- */

console.log("Mi nombre es " + name + ".");
console.log("Nací en " + bornPlace + " el " + bornDayOutput + " del " + bornMonthOutput + " del año " + bornYear + ".");
console.log("Por lo tanto tengo " + age + " años.");
console.log("Asi que he vivido " + diasVividos + " días.");
