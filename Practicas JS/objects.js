function artist(name, surname, country) { // Funcion constructura del objeto
  this.name = "";
  this.surname = "";
  this.country = "";

  function crear() {

  }

}



var myArtist = new myArtist(); // Objeto
artist.myArtist.name = "Salvador";

console.log(myArtist.name);

// El hijo extiende del padre, osea no coge diractamente las cosas del padre si no que se las pide con prototype