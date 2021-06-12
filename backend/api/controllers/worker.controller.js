const { parentPort } = require("worker_threads");

const calculateTotal = (subjects) => {
	let total = 0;
	subjects.map((subject) => {
		total += subject._doc.amount;
	});

	return total;
};

parentPort.on("message", (subjects) => {
	parentPort.postMessage(calculateTotal(subjects));
});
