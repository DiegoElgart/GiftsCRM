const express = require("express");
const router = express.Router();
const giftCardBLL = require("../BLL/giftCardsBLL");

router.get("/", async (req, res) => {
	try {
		const giftCards = await giftCardBLL.getAllGiftCards();
		res.status(200).send(giftCards);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const giftCard = await giftCardBLL.getGiftCardById(id);
		res.status(200).send(giftCard);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/addGiftCard", async (req, res) => {
	try {
		const { giftCard } = req.body;
		const newGiftCard = await giftCardBLL.addGiftCard(giftCard);
		res.status(200).send(newGiftCard);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/update/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { giftCard } = req.body;
		const updatedGiftCard = await giftCardBLL.updateGiftCard(id, giftCard);
		res.status(200).send(updatedGiftCard);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

router.post("/delete/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const deleteGiftCard = await giftCardBLL.deleteGiftCard(id);
		res.status(200).send(deleteGiftCard);
	} catch (err) {
		res.status(500).send({ message: err.message });
	}
});

module.exports = router;
