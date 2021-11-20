const {check} = require("express-validator");

const validationOfLogin = [
    check("email").notEmpty().isEmail().withMessage("Debes escribir un email valido"),
    check("password").notEmpty().withMessage("las credenciales son invalidas")
]

module.exports = validationOfLogin;