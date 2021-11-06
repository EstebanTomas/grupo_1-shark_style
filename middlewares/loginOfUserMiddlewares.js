const {check} = require("express-validator");

const validationOfLogin = [
    check("email").notEmpty().isEmail().withMessage("Debes escribir un email valido"),
    check("password").notEmpty().withMessage("Tu contraseña puede ser errónea")
]

module.exports = validationOfLogin;