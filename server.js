    const express = require('express');
    const path = require('path');

    const app = express();
    const PORT = process.env.PORT || 3000;

    // Middleware pour stocker les requêtes
    const requests = [];

    app.use((req, res, next) => {
    const requestData = {
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.get('User-Agent')
    };
    requests.push(requestData); // Stocker la requête dans le tableau
    console.log('Nouvelle requête:', requestData);
    next();
    });

    // Middleware pour servir les fichiers statiques
    app.use(express.static(path.join(__dirname, 'public')));

    // Route pour la page d'accueil
    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });

    // Route pour afficher les requêtes
    app.get('/requests', (req, res) => {
    res.json(requests); // Renvoyer les requêtes enregistrées en tant que JSON
    });

    // Écouter le port spécifié
    app.listen(PORT, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
    });