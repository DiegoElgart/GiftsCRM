const express = require("express");
const router = express.Router();
const reportBLL = require("../BLL/reportBalanceBLL");

router.get("/", async (req, res) => {
	try {
		const reports = await reportBLL.getAllReports();
		res.status(200).send(reports);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const report = await reportBLL.getReportById(id);
		res.status(200).send(report);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/addReport", async (req, res) => {
	try {
		const { report } = req.body;
		const newReport = await reportBLL.addNewReport(report);
		res.status(200).send(newReport);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { report } = req.body;
		const updateReport = await reportBLL.updateReport(id, report);
		res.status(200).send(updateReport);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteReport = await reportBLL.deleteReport(id);
		res.status(200).send(deleteReport);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

module.exports = router;
