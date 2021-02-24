const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController.js');

// Page principale :

router.get('/', mainController.homePage);

// Post page principale :

router.post('/', mainController.homePagePost);

module.exports = router;