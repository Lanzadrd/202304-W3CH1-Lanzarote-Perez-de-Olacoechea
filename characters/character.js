export class Character {
  constructor(name, family, age) {
    this.serie = "GOT";
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = "alive";
  }

  goDie() {
    this.status = "dead";
    return this.status;
  }
}
