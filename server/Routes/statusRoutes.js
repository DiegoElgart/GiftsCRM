const express = require("express");
const router = express.Router();
const statusBLL = require("../BLL/statusBLL");

router.get("/", async (req, res) => {
	try {
		const statuses = await statusBLL.getAllStatus();
		res.status(200).send(statuses);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const status = await statusBLL.getStatusById(id);
		res.status(200).send(status);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/addStatus", async (req, res) => {
	try {
		const status = req.body;
		const newStatus = await statusBLL.addStatus(status);
		res.status(200).send(newStatus);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { status } = req.body;
		const updateStatus = await statusBLL.updateStatus(id, status);
		res.status(200).send(updateStatus);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteStatus = await statusBLL.deleteStatus(id);
		res.status(200).send(deleteStatus);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

module.exports = router;
