const stockDAL = require("../DL/stockDAL");

const getAllStocks = async () => {
	const stocks = await stockDAL.getAllStocks();
	return stocks;
};

const getStockById = async id => {
	const stock = await stockDAL.getStockById(id);
	return stock;
};

const addNewStock = async stock => {
	const newStock = await stockDAL.addNewStock(stock);
	return newStock;
};

const updatedStock = async (id, stockToUpdate) => {
	const stock = await stockDAL.updatestock(id, stockToUpdate);
	return stock;
};

const deleteStock = async id => {
	const stock = await stockDAL.deleteStock(id);
	return stock;
};

module.exports = {
	getAllStocks,
	getStockById,
	addNewStock,
	updatedStock,
	deleteStock,
};
