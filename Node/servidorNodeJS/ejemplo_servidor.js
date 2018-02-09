// usar módulo HTTP
var http = require('http');
// usar módulo URL
var url = require('url');
// usar modulo FILE SYSTEM
var file = require('fs');

http.createServer(function(request, response) { // Nucleo NodeJS
  // Recoger parámetros
  var parametros = url.parse(request.url, true).query; // parse lo pasa a String, query crea un JSON
  console.log(parametros);

  file.readFile('html/prueba.html', function(err, data) {
    response.writeHead(200, { // 200 = Success
      'Content-Type': 'text/html'
    });
    response.write('<h1>Escribiendo datos del fichero .html</h1>');
    response.write(data);

    response.end();

  });





}).listen(8080);

console.log('Running server... \nSuccessful');