const express = require('express');
const router = express.Router();

var mainControllers = require('../controllers/mainControllers')

router.get('/login', mainControllers.login);

router.get('/register', mainControllers.register);

router.get('/shopping', mainControllers.shoppingCart);

module.exports = router;