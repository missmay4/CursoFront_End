$(document).ready(function() {

  $("#myButton").click(function() {

    if ($("#greenLight").hasClass("encendido") == false && $("#yellowLight").hasClass("encendido") == false && $("#redLight").hasClass("encendido") == false) {
      $("#greenLight").addClass("encendido");
    } else if ($("#greenLight").hasClass("encendido") == true) {
      $("#greenLight").removeClass("encendido");
      $("#yellowLight").addClass("encendido");
    } else if ($("#yellowLight").hasClass("encendido") == true) {
      $("#yellowLight").removeClass("encendido");
      $("#redLight").addClass("encendido");
    } else {
      $("#redLight").removeClass("encendido");
      $("#greenLight").addClass("encendido");
    }

  });

});