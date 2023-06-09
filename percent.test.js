const getPercents = require("./percent.js");
xdescribe("test percent", () => {
	it("get 30 percent from number 200 to equal 60", () => {
		const result = getPercents(30, 200);
		expect(result).toBe(60);

	})
})