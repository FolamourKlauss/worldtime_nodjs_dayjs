const express = require('express');

// création du routeur
const router = express.Router();

// mon nouveau module flambant neuf
const lt = require('../my_modules/localTime');

const capitalCities = require('../my_modules/capitalCities');

// la route anciennement rattachée à app est maintenant rattachée à router
router.get('/city/:city', (req, res) => {
    const city = req.params.city.toLowerCase();

    // une variable qui contiendra la bonne capitale
    // find va chercher dans un array jusqu'à trouver un élément qui satisfait le test booléen écrit dans le callback
    let theCapitalCity = capitalCities.find((laCapitaleEnTrainDEtreVerifiee) => {
        return laCapitaleEnTrainDEtreVerifiee.name.toLowerCase() === city;
    });

    // si on n'a pas identifié de capitale portant le nom demandé
    if (!theCapitalCity) {
        // status change le code HTTP de la réponse
        // et send se charge du message
        res.status(404).send('Pas de capitale portant ce nom');
        return;
    }

    const localTime = lt.getLocalTime(theCapitalCity.tz);

    

    // et afficher le tout
    res.send(`<h1>${theCapitalCity.name}</h1> <h2>${theCapitalCity.tz}</h2> <p>${localTime}</p>`);
});

// on n'oublie pas d'exporter
module.exports = router;