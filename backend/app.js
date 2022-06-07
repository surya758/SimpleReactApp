const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = 3001;

const productSchema = new mongoose.Schema({
	title: String,
	detail: String,
});

const Product = mongoose.model("Product", productSchema);

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

app.get("/", (req, res) => {
	res.status(200);
	Product.find({}, (err, found) => {
		if (!err) {
			return res.json(found);
		}
		console.log(err);
		res.send("Some error occured!");
	});
});

app.listen(PORT, () => {
	console.log(`Listen on the port ${PORT}...`);
});
