const Subject = require("../models/subject.model.js");

const getAllSubjects = async (req, res) => {
	try {
		const allSubjects = await Subject.find();
		res.status(200).json({ subjects: allSubjects });
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const saveSubject = async (req, res) => {
	if (req.body) {
		try {
			const newSubject = new Subject(req.body);
			await newSubject.save();
			return res.status(201).json({ id: newSubject._id });
		} catch (error) {
			return res.status(406).json({ message: error.message });
		}
	}

	res.status(406).json({ message: "empty request body" });
};

module.exports = { getAllSubjects, saveSubject };
