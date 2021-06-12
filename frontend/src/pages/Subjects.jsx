import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import SubjectCard from "../components/subject/SubjectCard";

const Subjects = () => {
	const [subjects, setSubjects] = useState([]);
	const { id } = useParams();

	useEffect(async () => {
		const res = await axios.get(`courses/${id}`);
		console.log(res);
		setSubjects(res.data.subjects);
	}, []);

	return (
		<div className="container-lg mt-5">
			<h1 className="display-5 text-center mb-5">Subjects in Course</h1>
			<div className="row">
				{subjects.map((subject) => (
					<SubjectCard subject={subject} key={subject._id} />
				))}
			</div>
			<div className="text-center">
				<Link to="/" className="btn btn-primary mt-5">
					Back to Courses
				</Link>
			</div>
		</div>
	);
};

export default Subjects;
