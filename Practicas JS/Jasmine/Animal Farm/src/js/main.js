var myCochino = {

	// Properties
	// key : value,
	nombre : "Babe", // String
	color : "", // String
	peso : 0, // Integer

	// Methods
	setNombre : function(nuevoNombre) {
		this.nombre = nuevoNombre;
	}
};

//var otroCochino = myCochino.prototype;

console.log(myCochino.nombre); // Babe
myCochino.setNombre("Peggy");
console.log(myCochino.nombre); // Babe













/*
var unHombre = {

	// Properties
	// key : value,
	sexo : "H",

	// Methods
	getSexo : function() {
		return this.sexo;
	},

	setSexo : function(nuevoSexo) {
		this.sexo = nuevoSexo;
	}
};

console.log( unaPersona.getSexo() ); // H
unaPersona.setSexo("M");
console.log( unaPersona.getSexo() ); // M
*/