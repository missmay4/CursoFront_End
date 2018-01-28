var almacenar = {
  nombre: "May",
  Direccion: "Calle Albondigas",
  CIF: "1122334455Q",
  Telefono: 123456789,
  Email: "unicornioespasial@asf.sdf"
};

function cargaDatos() {
  var rendered = Mustache.render("nombre: {{nombre}} Direccion: {{Direccion}}<br> CIF: {{CIF}} Telefono: {{Telefono}} Email: {{Email}}", almacenar);
  $("#data").html(rendered);
}
$(document).ready(function() {
  cargaDatos();
});