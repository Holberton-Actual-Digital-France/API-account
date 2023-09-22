// Importation du modèle de l'utilisateur
const User = require('../models/userModel');
// Importation de brcypt
const bcrypt = require('bcrypt');
// Importation de la fonction de gestion d'erreurs pour la fonction signUp
const signUpErrors = require('../utils/error');

// Création de compte avec gestion des erreurs
const signUp = async (req, res) => {
	const { email, password } = req.body;
	try {
		if (!password)
			throw new Error('password');
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await User.create({email, password: hashedPassword});
		res.status(201).json({user: user._id});
	} catch (error) {
		const errors = signUpErrors(error);
		res.status(409).json(errors);
	}
}

// Connexion d'utilsateur avec gestion des erreurs
const signIn = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({email});
	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth)
			return res.status(200).json({'Utilisateur connecté': user._id});
		return res.status(409).json('Mot de passe incorrect');
	}
	return res.status(409).json('Utilisateur inconnu');
}

// Exportation des deux fonctions
module.exports = {
	signIn,
	signUp
}
