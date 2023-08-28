const express = require("express");
const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");
const router = express.Router();

require("dotenv").config();

const newToken = user => {
	const token = jwt.sign({ user }, process.env.SECRET_KEY);
	return token;
};

router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;
		let user = await User.findOne({ email: email });
		if (!user) return res.status(400).send({ message: "Email don't exists" });
		let match = user.checkPassword(password);
		if (!match) return res.status(400).send({ message: "Wrong Password!" });
		let token = newToken(user);
		return res.status(200).send({ user, token });
	} catch (err) {
		return res.status(500).send(err.message);
	}
});

router.post("/register", async (req, res) => {
	const { email, username, password } = req.body;
	try {
		let checkIfExists = await User.findOne({ email: email });
		if (checkIfExists == null) {
			let user = await User.create({ email: email, username: username, password: password });
			let token = newToken(user);
			return res.status(200).send({ user, token });
		} else {
			res.status(400).send({ message: "Email already registered" });
		}
	} catch (err) {
		return res.status(500).send(err.message);
	}
});
module.exports = router;
