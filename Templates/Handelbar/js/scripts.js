var context = {
  "name": "Stark Industries",
  "owner": "Tony Stark",
  "address": "Stark Tower, New York",
  "CIF": "1M1R0NM4N",
  "phone": 123456789,
  "mail": "thebestavenger@ironman.com"
};

// Template data
var template = $('#handlebars-demo').html();
// Complila el template en una funcion
var templateScript = Handlebars.compile(template);
// html
var html = templateScript(context);
// Inserta el html en la pagina
$(document.body).append(html);