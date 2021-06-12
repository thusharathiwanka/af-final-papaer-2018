import React from "react";

const SubjectCard = ({ subject }) => {
	return (
		<div className="col-3">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{subject.name}</h5>
					<h6 className="card-subtitle mb-2 text-muted">
						Rs. {subject.amount}
					</h6>
					<p className="card-text">{subject.description}</p>
				</div>
			</div>
		</div>
	);
};

export default SubjectCard;
