import { Character } from "./character.js";

export class Warrior extends Character {
  constructor(name, family, age, weapon, skill) {
    super(name, family, age);
    this.status = "alive";
    this.weapon = weapon;
    this.skill = skill;
    this.speech = "Primero pego y luego pregunto";
  }
}
