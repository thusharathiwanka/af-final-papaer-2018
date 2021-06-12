const { Worker } = require("worker_threads");
const Course = require("../models/course.model.js");

const getAllCourses = async (req, res) => {
	try {
		const allCourses = await Course.find();
		res.status(200).json({ courses: allCourses });
	} catch (error) {
		res.status(404).json({ error: error.message });
	}
};

const saveCourse = async (req, res) => {
	if (req.body) {
		try {
			const newCourse = new Course(req.body);
			await newCourse.save();
			return res.status(201).json({ id: newCourse._id });
		} catch (error) {
			return res.status(406).json({ message: error.message });
		}
	}

	res.status(406).json({ message: "empty request body" });
};

const getAllSubjectsOfCourse = async (req, res) => {
	if (req.params.id) {
		try {
			const { subjects } = await Course.findById({
				_id: req.params.id,
			}).populate("subjects");
			res.status(200).json({ subjects: subjects });
		} catch (error) {
			res.status(404).json({ error: error.message });
		}
	}
};

const calculateTotalOfCourse = async (req, res) => {
	if (req.params.id) {
		try {
			const { subjects } = await Course.findById(req.params.id).populate(
				"subjects",
				"amount"
			);

			if (subjects.length <= 0) {
				return res
					.status(200)
					.json({ message: "no subjects in the selected course" });
			}

			const worker = new Worker(`${__dirname}/worker.controller.js`);

			worker.on("message", (data) => {
				res.status(200).json({ total: data });
			});
			worker.on("error", (error) => {
				console.log(error);
				res.status(404).json({ error: error.message });
			});

			worker.postMessage(subjects);
		} catch (error) {
			res.status(404).json({ message: error.message });
		}
	}
};

module.exports = {
	getAllCourses,
	saveCourse,
	getAllSubjectsOfCourse,
	calculateTotalOfCourse,
};
