import { Squire } from "./squire.js";

describe("Given a characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const squire = new Squire("Joffrey", "Baratheon", 35, 10);

      expect(squire).toHaveProperty("name", "Joffrey");
      expect(squire).toHaveProperty("family", "Baratheon");
      expect(squire).toHaveProperty("age", 35);
      expect(squire).toHaveProperty("status", "alive");
      expect(squire).toHaveProperty("assSucker", 10);
    });
  });
});
