const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Connexion à MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'nytojo',   // Remplace par ton utilisateur MySQL
    password: '1313', // Remplace par ton mot de passe
    database: 'css'        // Remplace par le nom de ta base
});

// Vérifier la connexion
db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données :', err);
    } else {
        console.log('Connecté à MySQL');
    }
});

// Route pour récupérer des données
app.get('/', (req, res) => {
    db.query('SELECT * FROM ta_table LIMIT 5', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur serveur');
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
});
