const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require("path")
const adminControllers = require("../controllers/adminControllers");

const Upload = require("../../middlewares/saveImgUserMidlewares");
const ValidationsOfRegister = require("../../middlewares/validationsOfUser")
const profileMiddlewares = require("../../middlewares/profileMiddlewares");
const administratorMiddlewares = require("../../middlewares/administratorMiddkeware");
// **USERS**
router.post("/register", Upload.single('avatar') , ValidationsOfRegister ,adminControllers.saveRegister);

router.get("/edit/:id", adminControllers.updateRegister);
router.post("/edit/:id", Upload.single("avatarEdit"), ValidationsOfRegister, adminControllers.save);

// **PRODUCTS**
router.get('/products', adminControllers.adminProducts)
// route of create
router.get('/products/create', adminControllers.productCreate);
router.post('/products/create', UploadProducts.array("img", 3), adminControllers.create);
// this path shows the edit form
router.get('/products/edit/:id', adminControllers.editProduct);
router.put('/products/edit/:id', UploadProducts.array("img", 3), adminControllers.edit);
// routes in delete
router.delete('/products/delete/:id', adminControllers.delete);

module.exports = router;