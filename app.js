// création du serveur express
const express = require('express');

const app = express();

// import du routeur
const mainRouter = require('./routers/main');

// bonne pratique, ça permet de changer le port rapidement, dès les premières du script
const port = 3001;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// branchement du routeur sur l'app
app.use(mainRouter);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));