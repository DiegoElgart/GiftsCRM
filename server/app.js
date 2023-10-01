const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");

const app = express();
const PORT = 4000;

const userRoute = require("./Routes/userRoutes");
const giftCardRoute = require("./Routes/giftCardRoutes");
const orderRoute = require("./Routes/orderRoutes");
const reportsRoute = require("./Routes/reportsRoutes");
const stockRoute = require("./Routes/stockRoutes");
const statusRoute = require("./Routes/statusRoutes");
const uploadRoute = require("./Routes/uploadRoute");

app.use(express.json());
app.use(cors());

connectDB();

app.use("/auth", userRoute);
app.use("/giftcard", giftCardRoute);
app.use("/order", orderRoute);
app.use("/report", reportsRoute);
app.use("/stock", stockRoute);
app.use("/status", statusRoute);
app.use("/upload", uploadRoute);

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
