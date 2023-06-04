import { multiply } from "./index.js";

describe("test multiply", () => {
	it("multiply 1 * 0 to equal 0", () => {
		const result = multiply (1, 0);
      expect(result).toBe(0);
   }),
	it("multiply 2 * 7 to equal 14", () => {
		const result = multiply (2, 7);
      expect(result).toBe(14);
   });
});
