const express = require("express");
const router = express.Router();
const ordersBLL = require("../BLL/ordersBLL");

router.get("/", async (req, res) => {
	try {
		const orders = await ordersBLL.getAllOrders();
		res.status(200).send(orders);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const order = await ordersBLL.getOrderById(id);
		res.status(200).send(order);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/addOrder", async (req, res) => {
	try {
		const order = req.body;
		const newOrder = await ordersBLL.addNewOrder(order);
		res.status(200).send(newOrder);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { order } = req.body;
		const updatedOrder = await ordersBLL.updatedOrder(id, order);
		res.status(200).send(updatedOrder);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deletedOrder = await ordersBLL.deleteOrder(id);
		res.status(200).send(deletedOrder);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

module.exports = router;
