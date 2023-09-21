const ordersDAL = require("../DL/ordersDAL");

const getAllOrders = async () => {
	const orders = await ordersDAL.getAllOrders();
	return orders;
};

const getOrderById = async id => {
	const order = await ordersDAL.getOrderById(id);
	return order;
};

const addNewOrder = async order => {
	const newOrder = await ordersDAL.addNewOrder(order);
	return newOrder;
};

const updatedOrder = async (id, orderToUpdate) => {
	const order = await ordersDAL.updateOrder(id, orderToUpdate);
	return order;
};

const deleteOrder = async id => {
	const order = await ordersDAL.deleteOrder(id);
	return order;
};

module.exports = {
	getAllOrders,
	getOrderById,
	addNewOrder,
	updatedOrder,
	deleteOrder,
};
