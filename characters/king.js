import { Character } from "./characters/character.js";

export class King extends Character {
  constructor(name, family, age, regnalYears) {
    super(name, family, age);
    this.status = "alive";
    this.regnalYears = regnalYears;
    this.speech = "Vais a morir todos";
  }
}
