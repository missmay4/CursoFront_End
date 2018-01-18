document.getElementById("button").addEventListener("click", function(geolocalizar) {
  if (navigator.geolocation) {
    var output = document.getElementById("data");
    document.getElementById("data").innerHTML = "La geolocalizacion HTML5 esta soportada en este navegador";

    navigator.geolocation.getCurrentPosition(updateLocation);
  }
});

function updateLocation(position) {
  console.log('position:', position);
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  var precision = position.coords.accuracy;
  var altitud = position.coords.altitude;

  document.getElementById("data").innerHTML = "latidud: " + latitud + "<br> longitud: " + longitud + "<br> precision: " + precision + "<br> altitud: " + altitud;
}

var resultado = document.getElementById("resultado");
var data = {
  "one": 1,
  "two": 2,
  "three": 3,
  "four": 4
}; // JSON

// Guardar los elementos del json en localstorage
//setItem (clave, valor
var password = "pass";
localstorages.setItem(password, JSON.stringify(data));

// Recuperar los elementos del "storage"
var recoverData = localstorage.getItem(password);

// Añadir listener para el evento "click"
document.getElementById("button").addEventListener("click", function() {
  resultado.innerHTML = "one " + JSON.parse(recoverData).one;


});