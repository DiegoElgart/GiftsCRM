const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
	{
		id: { type: Number },
		created: { type: Date, default: Date.now },
		created_ts: { type: Number }, // is this TIMESTAMP?
		user_id: { type: String },
		user_first_name: { type: String },
		user_last_name: { type: String },
		user_email: { type: String },
		user_city: { type: String },
		user_address: { type: String },
		user_address_notes: { type: String },
		user_zipcode: { type: String },
		user_birthday: { type: Date },
		gift_type: { type: String },
		// randomID: { type: String },
		// serialID: { type: String },
		sum_gifts: { type: Number },
		identified: { type: Boolean },
		is_minor: { type: Boolean },
		notes: { type: String },
		status: { type: String },
		//status_note: { type: String },
		last_sended: { type: Date },
		last_updated: { type: Date },
		viewed: { type: Boolean },
		total: { type: Number },
		gift_cost: { type: Number },
		actual_cost: { type: Number },
		sent_times: { type: Number },
		returned: { type: Boolean },
		lost: { type: Boolean },
		lost_cost: { type: Number },
		lost_actual_cost: { type: Number },
		certified: { type: Boolean },
		pdf_sum: { type: String },
		pdf_notes: { type: String },
		customer_phone: { type: String },
		Identity_Confirm_ID: { type: String },
		Identity_Confirm_Date: { type: Date },
		Identity_Confirm_Last_Name: { type: String },
		site_lang: { type: String },
	},
	{ versionKey: false }
);

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
