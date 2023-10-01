const express = require("express");

const fs = require("fs");

const router = express.Router();

router.post("/", async (req, res) => {
	if (!req.file) {
		res.status(400).send({ message: "No file uploaded." });
		return;
	}

	// Create a new variable to store the destination path for the file.
	let destinationPath = `./uploads/${req.file.filename}`;

	// Write the file to the destination path.
	await req.file.createReadStream().pipe(fs.createWriteStream(destinationPath));

	// Close the file stream.
	outputFile.close();

	// Send a success response to the user.
	res.send(200);
});

module.exports = router;
