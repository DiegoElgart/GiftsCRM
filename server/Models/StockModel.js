const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema(
	{
		id: { type: Number },
		sended: { type: Date },
		gift_type: { type: String },
		total_sum: { type: Number },
		gift_discount: { type: Number },
		notes: { type: String },
	},
	{ versionKey: false }
);

const Stock = mongoose.model("Stock", StockSchema);

module.exports = Stock;
