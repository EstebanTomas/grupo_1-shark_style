const {check} = require("express-validator");

const validationsOfRegister = [
    check('name').notEmpty().isLength({min: 2}).withMessage('Debes escribir un nombre de usuario con más de 2 caracteres'),
    check('lastname').notEmpty().isLength({min: 2}).withMessage('Debes escribir un apellido con más de  2 caracteres'),
    check('email').notEmpty().isEmail().withMessage('Debes escribir un email valido'),
    check('password').notEmpty().isLength({min: 8}).withMessage('Debes escribir una contraseña con más de 8 caracteres')
];


module.exports = validationsOfRegister;