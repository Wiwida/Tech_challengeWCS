const express = require('express');
const morgan = require('morgan');
const app = express();
const router = require('./app/router.js');
const server = require('http').Server(app);
require('dotenv').config();

// Initialisation du processus :

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.set('views', './app/views');

app.use(express.urlencoded({ extended: true }));

//Logger

app.use(morgan('dev'));

app.use(express.static('static'));

app.use(router);

server.listen(port, () => {
    console.log('Serveur lancé, direction => http://localhost:' + port);
});