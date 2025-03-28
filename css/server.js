const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();

// Middleware pour traiter les données JSON
app.use(bodyParser.json());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
    host: 'localhost', // Remplacez par l'hôte de votre base de données
    user: 'root', // Remplacez par votre nom d'utilisateur
    password: 'Lavalavabe2025', // Remplacez par votre mot de passe
    database: 'nytojo' // Remplacez par votre nom de base de données
});

// Vérifier la connexion à la base de données
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err.stack);
        return;
    }
    console.log('Connecté à la base de données MySQL');
});

// Route pour la connexion
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Requête SQL pour vérifier l'email et le mot de passe
    const query = 'SELECT * FROM utilisateurs WHERE email = ? AND mot_de_passe = ?';
    
    db.query(query, [email, password], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }

        if (results.length > 0) {
            res.status(200).json({ message: 'Connexion réussie' });
        } else {
            res.status(400).json({ message: 'Identifiants incorrects' });
        }
    });
});

// Lancer le serveur
app.listen(3000, () => {
    console.log('Serveur en écoute sur le port 3000');
});
