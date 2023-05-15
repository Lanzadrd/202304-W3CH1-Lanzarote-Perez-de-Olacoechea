import { King } from "./king.js";

describe("Given a characters class", () => {
  describe("When we instantiate it", () => {
    test("We should have an object with the properties of the class", () => {
      const king = new King("Joffrey", "Baratheon", 35, 7);

      expect(king).toHaveProperty("name", "Joffrey");
      expect(king).toHaveProperty("family", "Baratheon");
      expect(king).toHaveProperty("age", 35);
      expect(king).toHaveProperty("status", "alive");
      expect(king).toHaveProperty("regnalYears", 7);
    });
  });
});
