const express = require('express');
const path = require('path');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const upload = require("../../middlewares/saveImgUserMidlewares");
const validationsOfRegister = require("../../middlewares/validationsOfUser")

// require files
const usersControllers = require('../controllers/usersControllers');
const { devNull } = require('os');

router.get('/login', usersControllers.login);

router.get('/register', usersControllers.createRegister);

router.get("/update/:id", usersControllers.updateRegister);
router.put("/update/:id", upload.single("avatar"), validationsOfRegister, usersControllers.saveEdit);

module.exports = router;