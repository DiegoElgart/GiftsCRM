const Order = require("../Models/OdersModel");

const getAllOrders = async () => {
	const orders = await Order.find();
	return orders;
};

const getOrderById = async id => {
	const order = await Order.find({ id: id });
	return order;
};

const addNewOrder = async order => {
	const newOrder = await Order.create(order);
	return newOrder;
};

const updateOrder = async (id, updatedOrder) => {
	const order = await Order.updateOne({ id: id }, updatedOrder);
	return order;
};

const deleteOrder = async id => {
	const order = await Order.deleteOne({ id: id });
	return order;
};
module.exports = {
	getAllOrders,
	getOrderById,
	addNewOrder,
	updateOrder,
	deleteOrder,
};
