import React, { useState, useEffect } from "react";
import axios from "axios";

import CourseCard from "../components/course/CourseCard";

const Home = () => {
	const [courses, setCourses] = useState([]);

	useEffect(async () => {
		const res = await axios.get("courses");
		console.log(res);
		setCourses(res.data.courses);
	}, []);

	return (
		<div className="container-lg mt-5">
			<h1 className="display-5 text-center mb-5">All Courses</h1>
			{courses.map((course) => (
				<CourseCard course={course} key={course._id} />
			))}
		</div>
	);
};

export default Home;
