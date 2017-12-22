var canvas = document.getElementById("myCanvas");
var canvas = document.getElementById("myCanvas2");
var canvas = document.getElementById("myCanvas3");

var rect = canvas.getContext("2d");
rect.fillStyle = "#FABADA";
// Pinta un cuadrado relleno
rect.fillRect(50, 100, 150, 175);

var circle = canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 90;

var gradiente = circle.createLinearGradient(0, 0, 200, 0);
gradiente.addColorStop(0, "#8e44ad");
gradiente.addColorStop(1, "#f1c40f");

circle.beginPath();
circle.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
circle.fillStyle = gradiente;
circle.fill();

var curve = canvas.getContext("2d");
curve.beginPath();
curve.moveTo(20, 210);
curve.quadraticCurveTo(20, 100, 200, 20);
curve.stroke();