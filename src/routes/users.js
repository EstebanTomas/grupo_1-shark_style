const express = require('express');
const path = require('path');
const router = express.Router();
const { check } = require('express-validator');



// require files
const usersControllers = require('../controllers/usersControllers');
const { devNull } = require('os');

router.get('/login', usersControllers.login);

router.get('/register', usersControllers.createRegister);



module.exports = router;