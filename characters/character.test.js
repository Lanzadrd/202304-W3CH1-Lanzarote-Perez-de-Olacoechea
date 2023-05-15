import { Character } from "./character.js";

describe("Given a characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const character = new Character("Joffrey", "Baratheon", 35);

      expect(character).toHaveProperty("name", "Joffrey");
      expect(character).toHaveProperty("family", "Baratheon");
      expect(character).toHaveProperty("age", 35);
      expect(character).toHaveProperty("status", "alive");
    });
  });
});
