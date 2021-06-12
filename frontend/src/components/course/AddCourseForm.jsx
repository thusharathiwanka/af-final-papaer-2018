import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const AddCourseForm = () => {
	const [options, setOptions] = useState([]);
	const [courseDetails, setCourseDetails] = useState({});
	const [selectedSubjects, setSelectedSubjects] = useState([]);
	const [isAdded, setIsAdded] = useState(false);
	const [isFailed, setIsFailed] = useState(false);

	useEffect(async () => {
		const res = await axios.get("subjects");
		setOptions(
			res.data.subjects.map((subject) => {
				return { value: subject._id, label: subject.name };
			})
		);
	}, []);

	const handleSave = async (e) => {
		e.preventDefault();
		courseDetails.subjects = selectedSubjects.map((subject) => {
			return subject.value;
		});

		const res = await axios.post("courses", courseDetails);

		if (res.data.id) {
			setIsAdded(true);
			setCourseDetails({});
		} else {
			setIsFailed(true);
		}
	};

	return (
		<div className="container-lg mt-5 d-flex flex-column align-items-center">
			<h1 className="text-center pb-3 pt-3 display-4">Create a Course</h1>
			<form className="rounded border p-5 bg-light w-75 d-flex flex-column">
				<div className="row">
					<div className="mb-3 col">
						<label htmlFor="exampleInputEmail1" className="form-label">
							Course Name
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							value={courseDetails.name}
							onChange={(e) =>
								setCourseDetails({ ...courseDetails, name: e.target.value })
							}
						/>
					</div>
					<div className="mb-3 col">
						<label htmlFor="exampleInputPassword1" className="form-label">
							Course Code
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputPassword1"
							value={courseDetails.code}
							onChange={(e) =>
								setCourseDetails({ ...courseDetails, code: e.target.value })
							}
						/>
					</div>
				</div>
				<div className="row">
					<div className="mb-3 col">
						<label htmlFor="passMark" className="form-label">
							Pass Mark
						</label>
						<input
							type="number"
							className="form-control"
							id="passMark"
							value={courseDetails.passMark}
							onChange={(e) =>
								setCourseDetails({ ...courseDetails, passMark: e.target.value })
							}
						/>
					</div>
					<div className="mb-3 col">
						<label htmlFor="lecturerInCharge" className="form-label">
							Lecturer in Charge
						</label>
						<input
							type="text"
							className="form-control"
							id="lecturerInCharge"
							value={courseDetails.lecturerInCharge}
							onChange={(e) =>
								setCourseDetails({
									...courseDetails,
									lecturerInCharge: e.target.value,
								})
							}
						/>
					</div>
				</div>
				<div className="row">
					<div className=" mb-3 col">
						<label className="form-label">Select Subjects</label>
						<Select
							isMulti
							name="options"
							options={options}
							className="basic-multi-select"
							classNamePrefix="select"
							onChange={setSelectedSubjects}
						/>
					</div>
				</div>
				<button type="submit" className="btn btn-primary" onClick={handleSave}>
					Submit
				</button>
			</form>
			{isAdded && (
				<div class="alert alert-success mt-5 w-75 text-center" role="alert">
					Course created successfully.
				</div>
			)}
			{isFailed && (
				<div class="alert alert-danger mt-5 w-75 text-center" role="alert">
					Something went wrong.
				</div>
			)}
		</div>
	);
};

export default AddCourseForm;
