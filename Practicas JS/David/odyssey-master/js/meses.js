
/* INPUT */
var selectedMonth = 3;
var months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo" ];
var outputMonth;

/* PROCESS */
switch( selectedMonth ) {
	case 0:
		outputMonth = months[0];
		break;
  case 1:
    outputMonth = months[1];
    break;
  case 2:
    outputMonth = months[2];
    break;
  case 3:
    outputMonth = months[3];
    break;
	case 4:
		outputMonth = months[4];
		break;
	default:
		outputMonth = "ERROR";
}

/* OUTPUT */
console.log("El mes seleccionado es " + outputMonth);