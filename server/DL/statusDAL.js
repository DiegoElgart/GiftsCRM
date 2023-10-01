const Status = require("../Models/StatusModel");

const getAllStatus = async () => {
	const statuses = await Status.find();
	return statuses;
};

const getStatusById = async id => {
	const status = await Status.findById(id);
	return status;
};

const addStatus = async status => {
	const newStatus = await Status.create(status);
	return newStatus;
};

const updateStatus = async (id, statusUpdated) => {
	const status = await Status.findOneAndUpdate({ _id: id }, statusUpdated);
	return status;
};

const deleteStatus = async id => {
	const status = await Status.findOneAndDelete({ _id: id });
	return status;
};

module.exports = { getAllStatus, getStatusById, addStatus, updateStatus, deleteStatus };
