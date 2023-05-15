import { Warrior } from "./warrior.js";

describe("Given a characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const warrior = new Warrior("Joffrey", "Baratheon", 35, "sword", 8);

      expect(warrior).toHaveProperty("name", "Joffrey");
      expect(warrior).toHaveProperty("family", "Baratheon");
      expect(warrior).toHaveProperty("age", 35);
      expect(warrior).toHaveProperty("status", "alive");
      expect(warrior).toHaveProperty("weapon", "sword");
      expect(warrior).toHaveProperty("skill", 8);
    });
  });
});
