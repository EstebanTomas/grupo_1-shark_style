const express = require('express');
const router = express.Router();

var mainControllers = require('../controllers/usersControllers')

router.get('/login', mainControllers.login);

router.get('/register', mainControllers.register);


module.exports = router;