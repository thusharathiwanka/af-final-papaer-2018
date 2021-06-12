import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
			<div className="container-lg">
				<Link to="/" className="navbar-brand">
					NAME &copy;
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link" aria-current="page">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to=""
								className="nav-link btn btn-outline-primary ms-4 px-3"
							>
								Link
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
