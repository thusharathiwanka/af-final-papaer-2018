const axios = require("axios");

describe("POST to /subject endpoint", () => {
	it("should create a subject and return an id", async () => {
		try {
			const res = axios.post("http://localhost:5000/subject", {
				name: "Software Testing",
				description: "focused on software testing",
				amount: 5000,
			});
			expect(res.status).toEqual(200);
		} catch (error) {
			console.log(error);
		}
	});
});
