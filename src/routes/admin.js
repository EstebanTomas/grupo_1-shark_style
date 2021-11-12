const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require("path")
const adminControllers = require("../controllers/adminControllers");

const Upload = require("../../middlewares/saveImgUserMidlewares");
const ValidationsOfRegister = require("../../middlewares/validationsOfUser")

// **USERS**
router.post("/register", Upload.single('avatar') , ValidationsOfRegister ,adminControllers.saveRegister);

router.get("/edit/:id", adminControllers.updateRegister);
router.post("/edit/:id", Upload.single("avatarEdit"), ValidationsOfRegister, adminControllers.save);

// **PRODUCTS**
router.get('/products', adminControllers.adminProducts)

module.exports = router;