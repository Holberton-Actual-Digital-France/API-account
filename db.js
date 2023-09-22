// Connexion à la base de donnée
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://root:Fwg8Ks1oszMKMSOx@cluster0.yj5dli8.mongodb.net/');
  console.log('Connection réussie');
};
