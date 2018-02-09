// Crear un Buffer de datos
// Buffer de 20 octetos sin inicializar
var myBuffer = new Buffer(64); // reservamos memoria de 20*8 = 160 bits

myBuffer.write("The cake is a lie! ");
console.log(myBuffer.toString('UTF-8'));

// Sacar los datos del Buffer en formato JSON
var myJSON = myBuffer.toJSON();
console.log(myJSON);


var myBuffer2 = new Buffer(100);
myBuffer2.write("Buffer depleated.");

// Buffer concatenado
var buffer_concatenado = Buffer.concat([myBuffer, myBuffer2]);
console.log(buffer_concatenado.toString('UTF-8'));

// Copiar Buffer
var copyBuffer = new Buffer(30);
myBuffer.copy(copyBuffer);
console.log(copyBuffer.toString('UTF-8'));

// Comparar bufferes
var compare = copyBuffer.compare(myBuffer);
console.log(compare);