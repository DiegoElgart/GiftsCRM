const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const counterSchema = new Schema({
	name: String,
	sequence: Number,
});

module.exports = mongoose.model("Counter", counterSchema);
