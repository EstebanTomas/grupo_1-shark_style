const {check} = require("express-validator");

const validationsOfRegister = [
    check('name').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    check('lastName').notEmpty().withMessage('Debes escribir tu apellido'),
    check('email').isEmail().withMessage('Debes escribir un email valido'),
    check('password').isLength({min: 8}).withMessage('Debes escribir una contraseña de almenos 8 caracteres')
];

module.exports = validationsOfRegister;