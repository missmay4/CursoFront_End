//
var express = require('express'); // Módulo
var app = express();

// Manejo de peticiones GET - app.get(ruta, callback) -
app.get("/", function(request, response) {
  //response.end("Mi primer servidor express");

  response.sendFile(__dirname + '/html/pruebaserver.html'); // __dirname es un metodo de express que te ofrece la ruta completa
  console.log(__dirname);

});

// Maneja peticion get para otra ruta
app.get("/users", function(request, response) {
  //response.end("Peticion GET para /users");
  console.log("ID: " + request.query.id);
  console.log("Name: " + request.query.name);
  response.write("ID: " + request.query.id);
  response.end(" Name: " + request.query.name);
  console.log("Peticion GET para /users");

});

// Manejar peticion get para otra ruta
//         /users/4/profile/may
app.get("/users/:id/profile/:name", function(request, response) {
  console.log(request.params);
  response.write("ID: " + request.params.id);
  response.end(" Nombre: " + request.params.name);
  console.log("Peticion GET para /users");

});

//Redireccion
app.get("/redireccion", function(request, response) {
  response.redirect(302, "/");
});


//Ejemplo de middlewares
// Firt middleware before response is send
app.use(function(request, response, next) {
  console.log("Start");
  next();
});
// Route handler
app.get('/middleware', function(request, response, next) {
  response.send("Middle");
  next();
});

app.use('/middleware', function(request, response, next) {
  console.log("End");
});



// Escuchar en el puerto 8080
app.listen(8080, function() {
  console.log("Escuchando en 8080");
});