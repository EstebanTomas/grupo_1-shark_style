const express = require('express');
const path = require('path');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Upload = require("../../middlewares/saveImgUserMidlewares");
const ValidationsOfRegister = require("../../middlewares/validationsOfUser");
const Validation = require("../../middlewares/loginOfUserMiddlewares");
const guestMiddlewares = require("../../middlewares/guestMiddleware");
const profile = require("../../middlewares/profileMiddlewares");
const userLogguedMiddleware = require("../../middlewares/userLogguedMiddlewares");
// require files
const usersControllers = require('../controllers/usersControllers');
const { devNull } = require('os');

router.get('/login', guestMiddlewares, usersControllers.login);
router.post('/login', Validation ,usersControllers.confirmSessionOfUser);

router.get("/profile/:id", profile, usersControllers.profile)

router.get('/register', guestMiddlewares, usersControllers.createRegister);

router.get("/destroy", usersControllers.deleteSession);

module.exports = router;