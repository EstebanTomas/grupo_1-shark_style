const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const validations = [
    check('name').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    check('lastname').notEmpty().withMessage('Debes escribir un apellido'),
    check('email').notEmpty().isEmail().withMessage('Debes escribir un email valido'),
    check('password').isLength({min: 8}).withMessage('Debes escribir una contraseña de almenos 8 caracteres')
]
// require files
const usersControllers = require('../controllers/usersControllers');

router.get('/login', usersControllers.login);

router.get('/register', usersControllers.register);
router.post('/register', validations ,usersControllers.userCreate);


module.exports = router;