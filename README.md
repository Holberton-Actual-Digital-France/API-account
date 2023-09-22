# API de création d'utilisateur et de vérification des identifiants

Cette API permet de créer un utilisateur avec un email (unique) et un mot de passe qui sera haché qui sera sauvegardé dans une base de données MongoDB. Elle permet aussi de pouvoir vérifier si des identifiants sont reconnus par la base de données (connexion).

## Outils utilisés

Pour développer cette API rapidement j'ai utilisé :
- Nodemon (relance automatique du serveur après mise à jour d'un ou plusieurs fichiers)
- NodeJS
- MongoDB et MongoDB compass (base de données et interface graphique)
- Postman (Test de l'API)

## Installation

### Clonage du repository
```sh
$ git clone https://github.com/Holberton-Actual-Digital-France/api-meteo.git
```
### Installation des modules
```sh
$ cd API-account/
$ npm install
```
### Lancement du serveur
```sh
$ npm run dev
```

## Résultats attendus

### Création d'un utilisateur


| Méthode |  Endpoint |  Valeurs "email" | Valeurs "password" |
|:-------:|:---------:|:----------------:|:------------------:|
|  POST   | /register | "test@gmail.com" |       "test"       |

Si l'email n'existe pas dans la base de données:

STATUS 201
```
{
    "user": "650d5fd6b4c70515793433dd"
}
```
Sinon:

STATUS 409
```
{
	{
    	"email": "Email déjà utilisé",
    	"password": ""
	}
}
```

### Vérification des indentifiants

| Méthode |  Endpoint |  Valeurs "email" | Valeurs "password" |
|:-------:|:---------:|:----------------:|:------------------:|
|  POST   |  /login   | "test@gmail.com" |       "test"       |

STATUS 200
```
{
    "Utilisateur connecté": "650d5fd6b4c70515793433dd"
}
```

### Erreurs de vérification des identifiants

| Méthode |  Endpoint |  Valeurs "email" | Valeurs "password" |
|:-------:|:---------:|:----------------:|:------------------:|
|  POST   |  /login   | "test@gmail.com" |   "wrongpassword"  |

STATUS 409
```
"Mot de passe incorrect"
```

| Méthode |  Endpoint |     Valeurs "email"    | Valeurs "password" |
|:-------:|:---------:|:----------------------:|:------------------:|
|  POST   |  /login   | "wrongemail@gmail.com" |       "test"       |

STATUS 409
```
"Utilisateur inconnu"
```
