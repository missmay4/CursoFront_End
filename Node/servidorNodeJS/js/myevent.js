// Modulo para manejar evento
var events = require('events');
// Objeto emisor de eventos
var event_emisor = new events.EventEmitter();
// Funcion manejadora del evento

var oven_alarm = function() {
  console.log('Smeels like pizza! Yummm!');

};

// Asignar mi manejador de evento
// Dar una acción
event_emisor.on('pizza_ready', oven_alarm); // evento pizza lista cuando la funcion se complete
// Lanzar evento
event_emisor.emit('pizza_ready');