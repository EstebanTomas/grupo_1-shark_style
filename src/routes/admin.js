const express = require("express");
const router = express.Router();
const {check} = require("express-validator");
const multer = require('multer');
const path = require("path")

const upload = require("../../middlewares/saveImageOfUser");
const adminControllers = require("../controllers/adminControllers");

const validationsOfRegister = [
    check('name').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    check('lastName').notEmpty().withMessage('Debes escribir tu apellido'),
    check('email').isEmail().withMessage('Debes escribir un email valido'),
    check('password').isLength({min: 8}).withMessage('Debes escribir una contraseña de almenos 8 caracteres')
]

router.post('/register', upload.single('avatar') ,validationsOfRegister ,adminControllers.saveRegister);

router.get("/update/:id", adminControllers.updateRegister);
router.post("/update/id", adminControllers.update);

module.exports = router;