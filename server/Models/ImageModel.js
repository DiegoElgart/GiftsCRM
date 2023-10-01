const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imageSchema = new Schema({
	filename: String,
	contentType: String,
	data: Buffer,
});

module.exports = mongoose.model("Image", imageSchema);
