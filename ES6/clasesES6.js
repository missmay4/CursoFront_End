/*jshint esversion: 6 */

// Clase Person (PADRE)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() { // Obtiene
    return this.name;
  }

  setName(name) { // Modifica
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

}

// Clase Student (hereda de Person) (HIJA)
class Student extends Persona {

  constructor(name = "Paula", age = 23, id = 4) {
    //Llamar al constructor del padre
    // Primera linea SIEMPRE el constructor
    super(name, age);
    // Nuevo parametro
    this.id = id;
  }

  getID() {
    return this.id;
  }

  setID(id) {
    this.id = id;
  }

  // Sobreescribir un metodo del PADRE
  setName(name) {
    this.name = `${nombre}`;

  }

}

// Instancias objetos HIJOS
var student = new Student("Pepe", 25, 1);
var student2 = new Student(undefined, undefined, undefined); // Paula, 23, 4 => Linea 31, valores por defecto
console.log(student.getName());
console.log(student2.getName());

// Modificar nombre con metodo del hijo
student.setName("Paco");
console.log(student.getName());

// Instanciar objetos del PADRE
var person = new Person("Adán", 30);
// Nombre del PADRE
console.log(person.getName());
// Modificar nombre con metodos del PADRE
person.setName("Eva");
console.log(person.getName());


/* ------------------------------------------------------------------------- */