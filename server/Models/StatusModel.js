const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = new Schema(
	{
		name: { type: String, unique: true },
		isclosed: Boolean,
		order: Number,
	},
	{ versionKey: false }
);

const Status = mongoose.model("Status", statusSchema);

module.exports = Status;
