const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// const vehicleRoutes = require("./api/routes/vehicle.routes");
// const categoryRoutes = require("./api/routes/category.routes");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/vehicles", vehicleRoutes);
// app.use("/categories", categoryRoutes);

mongoose
	.connect(process.env.MONGO_CONNECTION_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(() =>
		app.listen(PORT, () =>
			console.log(`mongodb synced and server up and running on port ${PORT}`)
		)
	)
	.catch((error) =>
		console.log(`could not connect to mongodb due to ${error.message}`)
	);

app.get("/", (req, res) => {
	res.send("<h1 align='center'>Application Frameworks 2021 API</h1>");
});
