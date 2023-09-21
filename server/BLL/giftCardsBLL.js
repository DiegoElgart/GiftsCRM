const giftCardDAL = require("../DL/giftCardsDAL");

const getAllGiftCards = async () => {
	const giftCards = await giftCardDAL.getAllGiftCards();
	return giftCards;
};

const getGiftCardById = async id => {
	const giftCard = await giftCardDAL.getGiftCardById(id);
	return giftCard;
};

const addGiftCard = async newGiftCard => {
	const giftCard = await giftCardDAL.addGiftCard(newGiftCard);
	return giftCard;
};

const updateGiftCard = async (id, giftCardToUpdate) => {
	const giftCard = await giftCardDAL.updateGiftCard(id, giftCardToUpdate);
	return giftCard;
};

const deleteGiftCard = async id => {
	const giftCard = await giftCardDAL.deleteGiftCard(id);
	return giftCard;
};

module.exports = { getAllGiftCards, getGiftCardById, addGiftCard, updateGiftCard, deleteGiftCard };
