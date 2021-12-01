const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");

const Upload = require("../../middlewares/saveImgUserMidlewares");
const ValidationsOfUser = require("../../middlewares/validationsOfUser");
const UploadProducts = require("../../middlewares/saveImgProductsMiddlewares");
const administratorMiddlewares = require("../../middlewares/administratorMiddlewares");
const profileMiddlewares = require("../../middlewares/profileMiddlewares");
<<<<<<< HEAD
const productCreateValidations = require("../../middlewares/productCreateValidations");
=======

const validationProductMiddleware = require('../../middlewares/productCreateValidations');
>>>>>>> 2d013cc645b4b1c9e9425d013d5642f434d2f1e5
//const validationUserEditMiddlewares = require("../../middlewares/validationUserEditMiddlewares");

// **USERS**
router.post("/register", Upload.single('avatar'), ValidationsOfUser, adminControllers.saveRegister);

router.get("/edit/:id", profileMiddlewares, adminControllers.updateRegister);
router.post("/edit/:id", Upload.single("avatarEdit"), ValidationsOfUser, adminControllers.save);

// **PRODUCTS**
router.get('/products', profileMiddlewares, administratorMiddlewares, adminControllers.adminProducts)
// route of create
router.get('/products/create', profileMiddlewares, administratorMiddlewares, adminControllers.productCreate);
<<<<<<< HEAD
router.post('/products/create', profileMiddlewares, administratorMiddlewares, UploadProducts.array("images", 3), productCreateValidations, adminControllers.create);
=======
router.post('/products/create', profileMiddlewares, administratorMiddlewares, UploadProducts.array("images", 3), validationProductMiddleware, adminControllers.create);
>>>>>>> 2d013cc645b4b1c9e9425d013d5642f434d2f1e5
// this path shows the edit form
router.get('/products/edit/:id', profileMiddlewares, administratorMiddlewares, adminControllers.editProduct);
router.put('/products/edit/:id', profileMiddlewares, administratorMiddlewares, UploadProducts.array("images", 3), adminControllers.edit);
// routes in delete
router.delete('/products/delete/:id', profileMiddlewares, administratorMiddlewares, adminControllers.delete);
/* 
router.get("destroy_user/:id", administratorMiddlewares, adminControllers.destroyUser)
router.delete("destroy_user/:id", adminControllers.delete)
 */
module.exports = router;