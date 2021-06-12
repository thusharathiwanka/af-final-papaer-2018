const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
	name: { type: String, required: true, trim: true },
	code: { type: String, required: true, trim: true },
	passMark: { type: Number, required: true },
	lecturerInCharge: { type: String, required: true, trim: true },
	subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "subjects" }],
});

const Course = new mongoose.model("courses", CourseSchema);

module.exports = Course;
