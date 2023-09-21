const Stock = require("../Models/StockModel");

const getAllStocks = async () => {
	const stocks = await Stock.find();
	return stocks;
};

const getStockById = async id => {
	const stock = await Stock.find({ id: id });
	return stock;
};

const addNewStock = async stock => {
	const newStock = await Stock.create(stock);
	return newStock;
};

const updateStock = async (id, stockToUpdate) => {
	const stock = await Stock.findOneAndUpdate({ id: id }, stockToUpdate);
	return stock;
};

const deleteStock = async id => {
	const stock = await Stock.findOneAndDelete({ id: id });
	return stock;
};
module.exports = {
	getAllStocks,
	getStockById,
	addNewStock,
	updateStock,
	deleteStock,
};
