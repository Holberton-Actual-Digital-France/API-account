const mongoose = require('mongoose');

// Création du schéma d'un utilisateur
const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true
		},
		password: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true,
	}
);

// Création du modèle et exportation
module.exports = mongoose.model('User', userSchema);
