$(document).ready(function() {

  $("#myButton1").click(function() {
    $("#grizz").addClass("myImage");
    $("#panda").removeClass("myImage");
    $("#icebear").removeClass("myImage");

  });

  $("#myButton2").click(function() {
    $("#panda").addClass("myImage");
    $("#grizz").removeClass("myImage");
    $("#icebear").removeClass("myImage");

  });

  $("#myButton3").click(function() {
    $("#icebear").addClass("myImage");
    $("#grizz").removeClass("myImage");
    $("#panda").removeClass("myImage");

  });

});