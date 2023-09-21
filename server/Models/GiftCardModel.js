const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GiftCardSchema = new Schema(
	{
		type: { type: String },
		discount_list: [{ discount: { type: Number }, createdAt: { type: Date, default: Date.now }, endAt: { type: Date } }],
	},
	{ versionKey: false }
);

const GiftCard = mongoose.model("GiftCard", GiftCardSchema);

module.exports = GiftCard;
