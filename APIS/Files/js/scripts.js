// Variables para input y resultados
var filesUpload = document.getElementById("files-upload");
var	fileList = document.getElementById("file-list");

// Funcion para dar formato HTML a la info de los ficheros
function traverseFiles(files){
	// Variables auxiliares
	var lista;
	var file;
	var fileInfo;

	// For que recorra la cantidad de archivos
	for (var i = 0; i <= files.length; i++){
		lista = document.createElement("li");
		file = files[i];

		fileInfo = "<div><strong>Fichero:</strong> " + file.name + "</div>";
		fileInfo += "<div><strong>Tamaño:</strong> " + file.size + " bytes</div>";
		fileInfo += "<div><strong>Tipo:</strong> " + file.type + "</div>";

		lista.innerHTML = fileInfo;

		fileList.appendChild(lista);
	}
}

// Listener para ver si se han añadido los ficheros al input
filesUpload.addEventListener("change", function(){
	traverseFiles(this.files);
});