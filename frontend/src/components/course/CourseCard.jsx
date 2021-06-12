import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
	return (
		<div className="card mb-4">
			<h5 className="card-header">{course.code}</h5>
			<div className="card-body">
				<h5 className="card-title">{course.name}</h5>
				<p className="card-text">By {course.lecturerInCharge}</p>
				<p className="card-text">Pass mark: {course.passMark}</p>
				<Link to={`courses/${course._id}`} className="btn btn-primary">
					Show subjects
				</Link>
			</div>
		</div>
	);
};

export default CourseCard;
