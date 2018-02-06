//jshint esversion: 6

/*

Crear una subclase bicileta que extienda de la clase Vehículo

La subclase bicileta debe sobreescribir al constructor de Vehículo, cambiando sus valores por defecto.

- Parametros por defecto del constructor del Vehículo:
  + Color = "azul"
  + Ruedas = "4"
  + Sonido = "Run, run"

- Nuevos parametros por defecto del constructor de bicicleta:
  + Ruedas = 2
  + Sonido = "bip, bip"

- Método del Vehículo (PADRE):
  tocarClaxon(){
  // console.log con el sonido del claxon
  }

*/

class Vehicle {
  constructor(color = "Azul", tyres = 4, sound = "Run, run!") {
    this.color = color;
    this.tyres = tyres;
    this.sound = sound;
  }

  // METODOS GET Y SET

  getColor() { // Obtiene
    return this.color;
  }

  setColor(color) { // Modifica
    this.color = color;
  }

  getTyres() {
    return this.tyres;
  }

  setTyres(tyres) {
    this.tyres = tyres;
  }

  getSound() {
    return this.sound;
  }

  setSound(sound) {
    this.sound = sound;
  }

}

// Clase Bicicleta, HIJA de Vehículo

class Bicycle extends Vehicle {
  constructor(color, tyres = 2, sound = "Bip, bip!") {
    //Llamar al constructor del padre
    super(color, tyres, sound);
  }

  getBicycleSound() {
    return `SONIDO ${super.getSound()}`;
  }
}


// INSTANCE

var car = new Vehicle(undefined, undefined, undefined);
console.log("__COCHE__");
console.log(car.getColor());
console.log(car.getTyres());
console.log(car.getSound());

var bicycle = new Bicycle("Roja", undefined, undefined);
console.log("__BICICLETA__");
console.log(bicycle.getColor());
console.log(bicycle.getTyres());
//console.log(bicycle.getSound()); Este le usamos cuando no tenemos el metodo en la bicileta, llamamos al de vehiculo directamente
console.log(bicycle.getBicycleSound());