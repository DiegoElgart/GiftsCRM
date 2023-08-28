const mongoose = require("mongoose");

const connectDB = () => {
	mongoose
		.connect("mongodb://127.0.0.1:27017/GiftCRM_DB")
		.then(() => console.log("Connected to GiftCRM_DB!"))
		.catch(error => console.log(error));
};

module.exports = connectDB;
