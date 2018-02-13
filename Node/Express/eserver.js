// CODIGO DEL SERVIDOR
var express = require('express'); // Módulo Express
var app = express();

// BASES DE DATOS
var mongo = require('mongodb'); // Modulo Mongo
var mongo_client = mongo.MongoClient; // Representa el cliente que se va a conectar al servidor, Interactuar con BBDD
var url = "mongodb://may:1234@ds233238.mlab.com:33238/db_mongo";

// Conexion a la base de datos
mongo_client.connect(url, function(err, database) {
  if (err) throw err;
  console.log("Database created!");

  // Representa a la BBDD
  var dbo = database.db("db_mongo");
  // Crear tabla y dar nombre
  /*dbo.createCollection("customers", function(err, response) {
    if (err) throw err;
    console.log("Customer table created!");
  }); TABLA YA CREADA */

  /*  // Insertar datos
    var customer = {
      name: "Company Inc",
      address: "Highway 37"
    }; // Crear objeto JSON para insertar
    dbo.collection("customers").insertOne(customer, function(err, response) {
      if (err) throw err;
      console.log("1 document inserted");
      //database.close();
    }); */

  /*  // Insertar multiples DATOS
    var mycustomers = [{
        name: 'John Albondiga',
        address: 'Highway 71'
      },
      {
        name: 'Peter',
        address: 'Lowstreet 4'
      },
      {
        name: 'Amy',
        address: 'Apple st 652'
      },
      {
        name: 'Hannah',
        address: 'Mountain 21'
      },
      {
        name: 'Michael',
        address: 'Valley 345'
      },
      {
        name: 'Sandy',
        address: 'Ocean blvd 2'
      },
      {
        name: 'Betty',
        address: 'Green Grass 1'
      },
      {
        name: 'Richard',
        address: 'Sky st 331'
      },
      {
        name: 'Susan',
        address: 'One way 98'
      },
      {
        name: 'Vicky',
        address: 'Yellow Garden 2'
      },
      {
        name: 'Ben',
        address: 'Park Lane 38'
      },
      {
        name: 'William',
        address: 'Central st 954'
      },
      {
        name: 'Chuck',
        address: 'Main Road 989'
      },
      {
        name: 'Viola',
        address: 'Sideway 1633'
      }
    ];
    dbo.collection("customers").insertMany(mycustomers, function(err, response) {
      if (err) throw err;
      console.log("Number of documents inserted: " + response.insertedCount);
      //database.close();
    }); */

  // Buscar el primer registro
  dbo.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    database.close();
  });

  // Buscando por filtros
  dbo.collection("customers").find({
    name: "Michael"
  }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[0].name);
    console.log(result[0].address);
    database.close();
  });

  // Peticion por letra
  var peticionVocal = {
    name: /^M/
  };
  dbo.collection("customers").find(peticionVocal).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    console.log(result[0].name);
    console.log(result[0].address);
    database.close();
  });

  // Ordenar datos en orden ascendente (1), en orden descendente (-1)

  /*  var mysort = {
      name: 1
    };
    dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      database.close();
    }); */

  // Mostrar un limite de datos a mostrar
  dbo.collection("customers").find().limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    database.close();
  });

  // Borrar

  var delet = {
    name: 'Michael'
  };
  dbo.collection("customers").deleteOne(delet, function(err, object) {
    if (err) throw err;
    console.log("1 document deleted");
    database.close();
  });

});

// FIN BASE DE DATOS

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