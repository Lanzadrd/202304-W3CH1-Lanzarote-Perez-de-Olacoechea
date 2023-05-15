import { Character } from "./character.js";

export class Squire extends Character {
  constructor(name, family, age, assSucker) {
    super(name, family, age);
    this.status = "alive";
    this.characterToServe = "warrior";
    this.assSucker = assSucker;
    this.speech = "Soy un loser";
  }
}
