// Gestion des erreurs de création de compte
const signUpErrors = (error) => {
	let errors = { email: '', password: ''};

	if (error.message.includes('email'))
		errors.email = 'Email requis';
	if (error.message.includes('password'))
		errors.password = 'Mot de passe requis';
	if (error.message.includes('email') && error.code == 11000)
		errors.email = 'Email déjà utilisé';
	return errors;
};

module.exports = signUpErrors;
