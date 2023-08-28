const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");

const app = express();
const PORT = 4000;

const userRoute = require("./Routes/userRoutes");

app.use(express.json());
app.use(cors());

connectDB();

app.use("/auth", userRoute);

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
