const express = require("express");
const router = express.Router();
const multer = require('multer');
const path = require("path")
const adminControllers = require("../controllers/adminControllers");

const Upload = require("../../middlewares/saveImgUserMidlewares");
const ValidationsOfRegister = require("../../middlewares/validationsOfUser");
const UploadProducts = require("../../middlewares/saveImgProductsMiddlewares");
const administratorMiddlewares = require("../../middlewares/administratorMiddkeware");
const guestMiddlewares = require("../../middlewares/guestMiddleware");
const profileMiddlewares = require("../../middlewares/profileMiddlewares");


// **USERS**
router.post("/register", Upload.single('avatar'), ValidationsOfRegister, adminControllers.saveRegister);

router.get("/edit/:id", profileMiddlewares, adminControllers.updateRegister);
router.post("/edit/:id", Upload.single("avatarEdit"), ValidationsOfRegister, adminControllers.save);

// **PRODUCTS**
router.get('/products', profileMiddlewares, administratorMiddlewares, adminControllers.adminProducts)
// route of create
router.get('/products/create', profileMiddlewares, administratorMiddlewares, adminControllers.productCreate);
router.post('/products/create', UploadProducts.array("img", 3), adminControllers.create);
// this path shows the edit form
router.get('/products/edit/:id', profileMiddlewares, administratorMiddlewares, adminControllers.editProduct);
router.put('/products/edit/:id', UploadProducts.array("img", 3), adminControllers.edit);
// routes in delete
router.delete('/products/delete/:id', profileMiddlewares, administratorMiddlewares, adminControllers.delete);
/* 
router.get("destroy_user/:id", administratorMiddlewares, adminControllers.destroyUser)
router.delete("destroy_user/:id", adminControllers.delete)
 */
module.exports = router;