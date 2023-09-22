// Importation du router d'express
const router = require('express').Router();
// Importation du controller du modèle de l'utilisateur
const userController = require('../controllers/userController');

// Route pour créer un compte
router.post('/register', userController.signUp);
// Route pour se connecter
router.post('/login', userController.signIn);

// Exportation du router
module.exports = router;
