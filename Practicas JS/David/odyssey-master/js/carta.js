/*
Subproblema 1: Implementar un programa que devuelva mi nombre

Subproblema 2:
  Subproblema 2.1: Implementar un programa que devuelva mi fecha de nacimiento
  Subproblema 2.2: Expresada en DD para el día, en MM para el mes y en YYYY para el año

Subproblema 3: Calcule mi edad a partir de dicha fecha
  Subproblema 3.1:
    SI el mes actual es MAYOR QUE el mes que nací
      --> Mi edad vale = el año actual - mi año de nacimiento;
    SI NO...

  Subproblema 3.2:
    SI el mes actual es MENOR QUE el mes que nací
      --> Mi edad vale = el año actual - mi año de nacimiento - 1;
    SI NO...

  Subproblema 3.3:
    (SI el mes actual es IGUAL QUE el mes que nací)

      Subproblema 3.3.1:
        SI el día actual es MAYOR O IGUAL QUE el día que nací
          --> Mi edad vale = el año actual - mi año de nacimiento;
      SI NO...

      Subproblema 3.3.2:
        (SI el día actual es MENOR QUE el día que nací)
          --> Mi edad vale = el año actual - mi año de nacimiento - 1;

Subproblema 4: Calcule los días que he vivido
  Subproblema 4.1: Sumar los días del año que nací hasta el 31 de diciembre
  Subproblema 4.2: Sumar los días de los años que van desde el año siguiente al que nací hasta el año anterior al actual
  Subproblema 4.3: Sumar los días desde el 1 de enero del año actual hasta hoy
  Subproblema 4.4: Sumar los días generados por bisiestos, incluyendo el que nací o el actual
*/

/* +++++++++++++++++++ input +++++++++++++++++++ */

// Declarar variables globales

var myAge;
var i;

// Inicializar variables globales

var myName = "David"; // Hardcoded declaration
var myDay = 6;
var myMonth = 2;
var myYear = 1982;
var myDayOutput = myDay;
var myDaysInEarth = 0;

var currentDate = new Date();
var currentYear = currentDate.getFullYear(); // Devuelve el año actual
var currentMonth = currentDate.getMonth(); // Devuelve el mes actual
var currentDay = currentDate.getDay(); // Devuelve el day actual

/* +++++++++++++++++++ process +++++++++++++++++++ */

/* ---------- Subproblema 2: Fecha nacimiento ---------- */

// Si mi dia de nacimiento es menor que 10...
if( myDay < 10 )
{
  myDayOutput = "0" + myDay; // Añade un cero al dia mostrado por consola
}

// Si mi mes de nacimiento es menor que 10...
if( myMonth < 10 )
{
  myMonthOutput = "0" + myMonth; // Añade un cero al mes mostrado por consola
}

/* ---------- Subproblema 3: Edad ---------- */

if ( currentMonth > myMonth ) { // Subproblema 3.1
  myAge = currentYear - myYear;
}
else
{
  if ( currentMonth < myMonth ) { // Subproblema 3.2
    myAge = currentYear - myYear - 1;
  }
  else // Subproblema 3.3
  {
    if ( currentDay >= myDay ) { // Subproblema 3.3.1
      myAge = currentYear - myYear;
    }
    else // Subproblema 3.3.2
    {
      myAge = currentYear - myYear - 1;
    }
  }
}

/* ---------- Subproblema 4: Días vividos ---------- */
/*
Subproblema 4.1: Sumar los días del año que nací hasta el 31 de diciembre
Subproblema 4.2: Sumar los días de los años que van desde el año siguiente al que nací hasta el año anterior al actual
Subproblema 4.3: Sumar los días desde el 1 de enero del año actual hasta hoy
Subproblema 4.4: Sumar los días generados por bisiestos, incluyendo el que nací o el actual
*/

// Subproblema 4.1: Sumar los días del año que nací hasta el 31 de diciembre

  // (Similar al 4.3)

// Subproblema 4.2: Sumar los días de los años que van desde el año siguiente al que nací hasta el año anterior al actual

  myDaysInEarth += ((currentYear-1) - (myYear+1)) * 365;

// Subproblema 4.3: Sumar los días desde el 1 de enero del año actual hasta hoy

  // Sumar los días de todos los meses menos el actual
  i = 0;

  while( i < currentMonth+1 ) {

    if ( i == 1 || i == 3 || i == 5 /*...*/ ) { // Si soy un mes con 31 días...

      myDaysInEarth += 31;
    } else
    if ( i == 4 || i == 6 /*...*/ ) { // Si soy un mes con 30 días...

      myDaysInEarth += 30;
    } else {

      // Soy febrero
      myDaysInEarth += 28;

      // Si el año actual es divisible por 4 Y no por 100...
      if( ( currentYear % 4 == 0 && currentYear % 100 != 0 ) ||
        ( currentYear % 400 == 0 ) ) { // ... O es divisible por 400

        // ... es bisiesto
        myDaysInEarth++;
      }
    }

    i++;
  }

  // Otra solución con for y switch
  /*
  for( i = 1; i < currentMonth+1; i++ )
  {
    switch(i) {
      case 1:
        myDaysInEarth += 31; // Enero
        break;
      case 2:
        myDaysInEarth += 28; // Febrero

        if( ( currentYear % 4 == 0 && currentYear % 100 != 0 ) ||
          ( currentYear % 400 == 0 ) ) {

          myDaysInEarth++;
        }
        break;
      case 3:
        myDaysInEarth += 31; // Marzo
        break;
      case 4:
        myDaysInEarth += 30; // Abril
        break;
      // ...
      default:
        break;
    }
  }
  */

  // Sumar los días del mes actual desde el primero hasta hoy
  myDaysInEarth += currentDay;

// Subproblema 4.4: Sumar los días generados por bisiestos, incluyendo el que nací o el actual

  var theYear = myYear;

  while( theYear+1 < currentYear-1 ) { // Para todos los años entre el que nací y el actual
    
    if( ( ( theYear % 4 == 0 ) && !( theYear % 100 == 0 ) ) || ( theYear % 400 == 0 ) ) { // Si fue bisiesto
      myDaysInEarth++;
    }

    theYear++;
  }

  // Si el año que nací fue bisiesto y nací antes del 1 de marzo
    // myDaysInEarth++;

  // Si el año actual es bisiesto y hoy es después del 28 de febrero
    // myDaysInEarth++;

/* +++++++++++++++++++ output +++++++++++++++++++ */

console.log("Mi nombre es " + myName + ".");
console.log("Mi fecha de nacimiento es el " + myDayOutput + " del " + myMonthOutput + " del " + myYear + ",");
console.log("Tengo " + myAge + " años.");
console.log("Y he vivido un total de " + myDaysInEarth + " días.");