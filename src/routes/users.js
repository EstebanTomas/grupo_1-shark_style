const express = require('express');
const path = require('path');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Upload = require("../../middlewares/saveImgUserMidlewares");
const ValidationsOfRegister = require("../../middlewares/validationsOfUser");
const Validation = require("../../middlewares/loginOfUserMiddlewares");
// require files
const usersControllers = require('../controllers/usersControllers');
const { devNull } = require('os');

router.get('/login', usersControllers.login);
router.post('/login', Validation ,usersControllers.confirmSessionOfUser);

router.get('/register', usersControllers.createRegister);


module.exports = router;