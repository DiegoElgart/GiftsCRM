const express = require("express");
const router = express.Router();
const stockBLL = require("../BLL/stocksBLL");

router.get("/", async (req, res) => {
	try {
		const stocks = await stockBLL.getAllStocks();
		res.status(200).send(stocks);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const stock = await stockBLL.getStockById(id);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/addStock", async (req, res) => {
	try {
		const { stock } = req.body;
		const newStock = await stockBLL.addNewStock(stock);
		res.status(200).send(newStock);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { stock } = req.body;
		const updateStock = await stockBLL.updatedStock(id, stock);
		res.status(200).send(updateStock);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteStock = await stockBLL.deleteStock(id);
		res.status(200).send(deleteStock);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

module.exports = router;
