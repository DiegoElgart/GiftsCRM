const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UserSchema = new Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true, unique: true },
	},
	{ versionKey: false }
);
UserSchema.pre("save", function (next) {
	if (!this.isModified("password")) return next();
	const hash = bcrypt.hashSync(this.password, 8);
	this.password = hash;
	return next();
});

UserSchema.methods.checkPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
