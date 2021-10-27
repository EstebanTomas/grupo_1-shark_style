const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require("path")

const upload = require("../../middlewares/saveImgUserMidlewares");
const adminControllers = require("../controllers/adminControllers");
const validationsOfRegister = require("../../middlewares/validationsOfUser")


router.post("/register", upload.single('avatar') ,validationsOfRegister ,adminControllers.saveRegister);

//router.post("/update/id", adminControllers.update);

module.exports = router;