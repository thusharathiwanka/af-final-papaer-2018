const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	description: { type: String, required: true, trim: true },
	amount: { type: Number, required: true },
});

const Subject = new mongoose.model("subjects", SubjectSchema);

module.exports = Subject;
