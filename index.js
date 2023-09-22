// Importation des modules requis
const express = require('express');
const port = 3000;
const userRoute = require('./routes/userRoute');
require('./db');

// Création d'une instance d'Express
const app = express();
app.use(express.json());

// Montage de la route utilisateur
app.use('/', userRoute);

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
