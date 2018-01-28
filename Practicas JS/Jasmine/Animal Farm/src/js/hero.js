"use strict";

class Hero {
  constructor(name, race) {
    this.name = name;
    this.race = race;
  }

  attack() {
  	console.log("No hago nadaaaa!!!");
  }
}

class Wizard extends Hero {
  constructor(name, race, mana) {
    super(name, race);
    this.mana = mana;
  }

  attack() {
  	console.log("Toma hechizo!!!");
  	this.mana--;
  }
}

var myHero = new Hero( "Generico", "SinRaza" );
myHero.attack(); // No hago nadaaaa

var myWizard = new Wizard( "Gandalf", "Maia", 4 );
myWizard.attack(); // Toma hechizo!!!
