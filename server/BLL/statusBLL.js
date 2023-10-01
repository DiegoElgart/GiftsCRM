const statusDAL = require("../DL/statusDAL");

const getAllStatus = async () => {
	const statuses = await statusDAL.getAllStatus();
	return statuses;
};

const getStatusById = async id => {
	const status = await statusDAL.getStatusById(id);
	return status;
};

const addStatus = async status => {
	const newStatus = await statusDAL.addStatus(status);
	return newStatus;
};

const updateStatus = async (id, statusUpdated) => {
	const status = await statusDAL.updateStatus({ _id: id }, statusUpdated);
	return status;
};

const deleteStatus = async id => {
	const status = await statusDAL.deleteStatus({ _id: id });
	return status;
};

module.exports = { getAllStatus, getStatusById, addStatus, updateStatus, deleteStatus };
