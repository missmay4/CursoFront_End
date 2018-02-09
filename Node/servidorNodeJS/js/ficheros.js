// Declarar los modulos
var file = require("fs");
var save_data = ''; // Guardar datos

// Crear OBJETO (con funciones y atributos) 'Stream'  de lectura
var streamReader = file.createReadStream('../html/ficheros.html');

// Manejar eventos del stream
// Evento para cuando hay datos
streamReader.on('data', function(character) {
  save_data += character;
  console.log(character);

});

streamReader.on('end', function() {
  console.log(save_data);
  console.log('End read of file');
});

streamReader.on('error', function(err) {
  console.log(err.stack);
});

console.log("Finish reading... ");