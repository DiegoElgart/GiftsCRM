const GiftCard = require("../Models/GiftCardModel");

const getAllGiftCards = async () => {
	const giftCars = await GiftCard.find();
	return giftCars;
};

const getGiftCardById = async id => {
	const giftCard = await GiftCard.findById(id);
	return giftCard;
};

const addGiftCard = async giftCard => {
	const newGiftCard = await GiftCard.create(giftCard);
	return newGiftCard;
};

const updateGiftCard = async (id, giftCardToUpdate) => {
	const giftCard = await GiftCard.findByIdAndUpdate(id, giftCardToUpdate);
	return giftCard;
};

const deleteGiftCard = async id => {
	const giftCard = await GiftCard.findByIdAndDelete(id);
	return giftCard;
};

module.exports = { getAllGiftCards, getGiftCardById, addGiftCard, updateGiftCard, deleteGiftCard };
