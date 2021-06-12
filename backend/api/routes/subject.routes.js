const router = require("express").Router();
const {
	getAllSubjects,
	saveSubject,
} = require("../controllers/subject.controller");

router.get("/", getAllSubjects);
router.post("/", saveSubject);

module.exports = router;
