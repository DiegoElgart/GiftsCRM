const reportDAL = require("../DL/reportBalanceDAL");

const getAllReports = async () => {
	const reports = await reportDAL.getAllReports();
	return reports;
};

const getReportById = async id => {
	const report = await reportDAL.getReportById(id);
	return report;
};

const addNewReport = async report => {
	const newReport = await reportDAL.addNewReport(report);
	return newReport;
};

const updateReport = async (id, reportToUpdate) => {
	const report = await reportDAL.updateReport(id, reportToUpdate);
	return report;
};

const deleteReport = async id => {
	const report = await reportDAL.deleteReport(id);
	return report;
};

module.exports = { getAllReports, getReportById, addNewReport, updateReport, deleteReport };
