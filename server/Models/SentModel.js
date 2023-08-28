const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SentSchema = new Schema(
	{
		order_id: { type: Number, ref: "Order.id" },
		send_date: { type: Date },
		certified: { type: Boolean },
		returned: { type: Boolean },
		sum: { type: Number },
		received: { type: Boolean },
		notes: { type: String },
	},
	{ versionKey: false }
);

const Sent = mongoose.model("Sent", SentSchema);

module.exports = Sent;
