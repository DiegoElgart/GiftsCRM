const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReportBalanceSchema = new Schema(
	{
		r_date: { type: Date },
		total: { type: Number },
		actual_cost: { type: Number },
		sent_times: { type: Number },
		returned: { type: Number },
		lost: { type: Number },
		lost_cost: { type: Number },
		certified: { type: Number },
		last_updated: { type: Date },
	},
	{ versionKey: false }
);

const ReportBalance = mongoose.model("ReportBalance", ReportBalanceSchema);

module.exports = ReportBalance;
