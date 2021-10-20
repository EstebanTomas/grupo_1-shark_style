const express = require('express');
const path = require('path');
const router = express.Router();
const { check } = require('express-validator');
const multer = require('multer');

const validationsOfRegister = [
    check('name').notEmpty().withMessage('Debes escribir un nombre de usuario'),
    check('lastName').notEmpty().withMessage('Debes escribir tu apellido'),
    check('email').isEmail().withMessage('Debes escribir un email valido'),
    check('password').isLength({min: 8}).withMessage('Debes escribir una contraseña de almenos 8 caracteres')
]

const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
        cb(null, path.resolve(__dirname, '/img/user_photo'));
    },
    filename:  (req, file, cb ) => {
        cb(null, 'avatar' + '-' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage});
// require files
const usersControllers = require('../controllers/usersControllers');
const { devNull } = require('os');

router.get('/login', usersControllers.login);

router.get('/register', usersControllers.register);
router.post('/register', upload.single('avatar') ,validationsOfRegister ,usersControllers.userCreate);


module.exports = router;