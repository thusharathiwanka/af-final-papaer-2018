const router = require("express").Router();
const {
	getAllCourses,
	saveCourse,
	getAllSubjectsOfCourse,
	calculateTotalOfCourse,
} = require("../controllers/course.controller");

router.get("/", getAllCourses);
router.get("/total/:id", calculateTotalOfCourse);
router.get("/:id", getAllSubjectsOfCourse);
router.post("/", saveCourse);

module.exports = router;
