const ReportBalance = require("../Models/ReportBalanceModel");

const getAllReports = async () => {
	const reports = await ReportBalance.find();
	return reports;
};
const getReportById = async id => {
	const report = await ReportBalance.find({ id: id });
	return report;
};

const addNewReport = async report => {
	const newReport = await ReportBalance.create(report);
	return newReport;
};

const updateReport = async (id, reportToUpdate) => {
	const report = await ReportBalance.findByIdAndUpdate({ id: id }, reportToUpdate);
	return report;
};

const deleteReport = async id => {
	const report = await ReportBalance.findByIdAndDelete({ id: id });
	return report;
};

module.exports = { getAllReports, getReportById, addNewReport, updateReport, deleteReport };
