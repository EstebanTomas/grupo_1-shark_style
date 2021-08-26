const express = require('express');

const router = express.Router();
const { body } = require('express-validator');

const validations = [
    body('name').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    body('email').notEmpty().withMessage('Debes escribir un email valido'),
    body('password').isEmail().notEmpty().withMessage('Debes escribir una contraseña valida')
]
// require files
const usersControllers = require('../controllers/usersControllers');

router.get('/login', usersControllers.login);

router.get('/register', usersControllers.register);
router.post('/register', validations ,usersControllers.userCreate);


module.exports = router;