$(document).ready(function() {

  // Cuando el usuario haga click en el 'button'
  $("#button").click(function() {
    // pedir por AJAX a la url el numero el JSON que devuelve nombre y numero
    $.ajax({
        method: "GET",
        url: "http://192.168.201.102/loteria"
      })
      .done(function(response) { // y recojerlo
        // Traducir el JSON stringficado
        var respuesta = JSON.parse(response);
        // Pintar por pantalla el nombre y el numero que te da el servidor backend
        $("#premio").html("Enhorabuena, " + respuesta.nombre + "has ganado con el numero" + respuesta.numero);

      });
  });
});