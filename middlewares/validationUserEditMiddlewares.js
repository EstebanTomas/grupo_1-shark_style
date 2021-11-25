const {check} = require("express-validator");

const validationUserEditMiddlewares = [
    check("nameEdit").notEmpty().isLength({min : 2}).withMessage('Tu nuevo nombre de usuario debe tener más de 2 caracteres'),
    check("lastNameEdit").notEmpty().isLength({min : 2}).withMessage('tu apellido debe tener más de 2 caracteres'),
    check("emailEdit").notEmpty().isEmail().withMessage('Debes escribir un email valido'),
    check("passwordEdit").notEmpty().isLength({min : 8}).withMessage('Tu contraseña debe tener más de 8 caracteres')
];

module.exports = validationUserEditMiddlewares;