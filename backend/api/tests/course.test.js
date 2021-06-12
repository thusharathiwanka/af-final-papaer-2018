const axios = require("axios");

describe("POST to /course endpoint", () => {
	it("should create a course and return an id", async () => {
		try {
			const res = axios.post("http://localhost:5000/course", {
				name: "Software Engineering",
				code: "SE2021",
				passMark: 75,
				lecturerInCharge: "Nuwan Kodagoda",
				subjects: ["60c4eb960b0c852d80796b62", "60c4ed94ba4c895100af2196"],
			});

			expect(res.status).toEqual(200);
		} catch (error) {
			console.log(error);
		}
	});
});
