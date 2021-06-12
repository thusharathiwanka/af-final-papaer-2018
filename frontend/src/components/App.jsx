import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Navbar from "./nav/Navbar";
import Home from "../pages/Home";

axios.defaults.baseURL = "http://localhost:5000/";

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
