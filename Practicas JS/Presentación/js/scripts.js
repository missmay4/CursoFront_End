/* ----------------------- INITIALIZE --------------------------- */
// Variables para strings
var name = "Mayte"; // Mi nombre
var bornPlace = "Las Palmas de GC"; // Lugar de nacimiento
// Variables fecha de nacimiento
var bornDay = 4; // Mi día de nacimiento
var bornDayOutput = bornDay; // Variable numerica día de nacimiento mostrada en string
var bornMonth = 8; // Mi mes de nacimiento
var bornMonthOutput = bornMonth; // Variable numerica mes de nacimiento mostrada en string
var bornYear = 1991; // Mi año de nacimiento
// Variables para fecha actual
var currentDate = new Date(); // Funcion que coje los datos de la fecha del sistema
var currentYear = currentDate.getFullYear(); // Año actual
var currentMonth = currentDate.getMonth(); // Mes actual
var currentDay = currentDate.getDay(); // Día actual

// Comprobar para que están estas variables y si no valen cambiarlas
var age;
var year;

/* ----------------------- PROCESS --------------------------- */

/* -------------------- Imprimir numeros de la fecha por consola con un 0 delante ----------------- */

if (bornDay < 10) {
  bornDayOutput = "0" + bornDay;
}

if (bornMonth < 10) {
  bornMonthOutput = "0" + bornMonth;
}

/* ----------------------------------------------------------------------------------------------------- */

/* -------------------- CALCULAR DÍAS VIVIDOS ----------------- */

/* +++++++ Calculo de años bisiesto +++++++ */

function esBisiesto(year) {

  if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
    return true; // Si el año es bisiesto entra por aquí
  } else {
    return false; // Si el año no es bisiesto, entra por aquí
  }

}

/* +++++++ Fin calculo de años bisiesto +++++++ */

if (esBisiesto(bornYear)) {
  /* Esto commprueba y muestra si el año de nacimiento es bisiesto porque
	el parametro de la funcion es el valor del año de nacimiento */
  console.log("El año de nacimiento es bisiesto");
} else {
  console.log("El año de nacimiento no es bisiesto");
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

/* +++++++ Calculo de días vividos +++++++ */

function calcularDias(day, month, year) { // Calcular días vividos segun los días, mes y año
  var now = new Date(); // Funcion que coje los datos de la fecha del sistema
  var bisiesto = 366; // Días totales de un año bisiesto
  var noBisiesto = 365; // Días totales de un año no bisiesto
  var contadorBisiesto = 0; // Variable contador para los años bisiestos totales
  var contadorNoBisiesto = 0; // Variable contador para los años no bisiestos totales

  /* Este bucle coge el año que este introducido en el parametro year (que aquí se convierte en i) que
  está definido en la funcion para sacar los años bisiestos y empieza a contar desde ese año y va
  comparando si es bisiesto o no, y lo almacena en la variable contador */

  for (var i = year; i <= now.getFullYear(); i++) {
    if (esBisiesto(i)) { // Bisiesto
      contadorBisiesto++; // Aqui se almacena uno a uno los años bisiestos
    } else { // No bisiesto
      contadorNoBisiesto++; // Aquí se almacenan uno a uno los años no bisiestos
    }
  }


  /* Creamos una nueva variable para almacenar los días. Esta variable va a ir cambiando según vayamos
  haciendo el calculo de los días segun el mes y el año. */

  var diasTotales = (contadorBisiesto * bisiesto) + (contadorNoBisiesto * noBisiesto);

  /* Primero, asignamos a la variable días totales la multiplicacion del contador de años bisiesto/no
  bisiesto por los días que tiene un año bisiesto/no bisiesto (366 o 635) y los sumamos para sacar los
  días totales que hay entre el año de nacimiento en este caso y el año en el que estamos ahora */

  // YA TENEMOS LOS DÍAS TOTALES ENTRE 1991 Y 2017 CONTANDO AÑOS BISIESTOS Y NO BISIESTOS


  /* +++++++++++++++++++ SEGUIR AQUI AQUI AQUI PARA LOS DÍAS +++++++++++++++++++++ */

  var normalYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Días totales año normal 365
  var leapYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Días totales año bisiesto 366

  for (var i = 0; i < month - 1; i++) {
    if (esBisiesto(year)) { // Bisiesto
      diasTotales = diasTotales - leapYear[i];
    } else {
      diasTotales = diasTotales - normalYear[i];
    }
  }

  diasTotales = diasTotales - now.getDay();

  for (var i = now.getMonth(); i <= 11; i++) {
    if (esBisiesto(year)) { // Bisiesto
      diasTotales = diasTotales - leapYear[i];
    } else {
      diasTotales = diasTotales - normalYear[i];
    }
  }

  diasTotales = diasTotales + now.getDay();

  return diasTotales;
}

/* +++++++ Calculo de días vividos +++++++ */

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */





/* Andrés mode

function calcularDias2(day, month, year) {
	var born = new Date(year, month-1, day);
	var now = new Date();

	return Math.floor((now - born) / 1000 / 60 / 60 / 24);
} */

/* ----------------------------------------------------------------------------------------------------- */

/* -------------------- Caldular edad segun meses y día ----------------- */
/*
if (currentYear > bornMonth) { // Si el mes en el que estamos es mayor o igual que el mes de nacimiento
  age = (currentYear - bornYear);
}

else {
	if (currentMonth < bornMonth) {
		age = currentYear.getFullYear - bornYear - 1;
	}
	else {
		if (currentDay < bornDay) {
			bornDay = currentYear - bornYear;
		}
		else {
			age = currentYear - bornYear - 1;
		}
	}

}
*/

/*

if (currentYear.getMonth() < bornMonth) { // Si el mes en el que estamos es menor que el mes de nacimiento
  age = (currentYear.getFullYear() - bornYear) - 1;
}

else {

} */

/* ----------------------------------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------------------------------- */

/* ----------------------- OUTPUT --------------------- */

/*
console.log("Mi nombre es " + name + ".");
console.log("Nací en " + bornPlace + " el " + bornDayOutput + " del " + bornMonthOutput + " del año "
	+ bornYear + ".");
console.log("Por lo tanto tengo " + age + " años.");
console.log("Asi que he vivido " + calcularDias(bornDay, bornMonth, bornYear) + " días."); */