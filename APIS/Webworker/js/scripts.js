
var worker; // Worker

function iniciarWorker() {
	if (Worker) {
		worker = new Worker('worker.js');

		worker.addEventListener("message", function(event) {
			var y = event.data[0];
			var z = event.data[1];
			var w = event.data[2];
			var x = (y + z) * w;

			document.getElementById("resultado").innerHTML = "Resultado: " + x; // Resultado

		});
	}
	else {
		document.getElementById("resultado").innerHTML = "Error de navegador";
	}
}

function pararWorker() {
	worker.terminate();
	worker = undefined;
}
