const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");

const Upload = require("../../middlewares/saveImgUserMidlewares");
const ValidationsOfUser = require("../../middlewares/validationsOfUser");
const UploadProducts = require("../../middlewares/saveImgProductsMiddlewares");
const administratorMiddlewares = require("../../middlewares/administratorMiddlewares");
const profileMiddlewares = require("../../middlewares/profileMiddlewares");
const { editProduct } = require("../controllers/adminControllers");
// const editProductMiddleware = require("../../middlewares/editProductMiddleware");
const productCreateValidations = require("../../middlewares/productCreateValidations");
//const validationUserEditMiddlewares = require("../../middlewares/validationUserEditMiddlewares");

// **USERS**
router.post("/register", Upload.single('avatar'), ValidationsOfUser, adminControllers.saveRegister);

router.get("/edit/:id", profileMiddlewares, adminControllers.updateRegister);
router.post("/edit/:id", Upload.single("avatarEdit"), ValidationsOfUser, adminControllers.save);
/* 
router.get("destroy_user/:id", administratorMiddlewares, adminControllers.destroyUser)
router.delete("destroy_user/:id", adminControllers.delete)
 */

// **PRODUCTS**
// router.get('/products', profileMiddlewares, administratorMiddlewares, adminControllers.adminProducts)
// route of create
router.get('/products/create', profileMiddlewares, administratorMiddlewares, adminControllers.productCreate);
router.post('/products/create', profileMiddlewares, administratorMiddlewares, UploadProducts.array("images", 3), productCreateValidations, adminControllers.create);
// this path shows the edit form
router.get('/products/edit/:id', profileMiddlewares, administratorMiddlewares, adminControllers.editProduct);
router.put('/products/edit/:id', profileMiddlewares, administratorMiddlewares, UploadProducts.array("images", 3), adminControllers.edit);
// routes in delete
router.delete('/products/delete/:id', profileMiddlewares, administratorMiddlewares, adminControllers.delete);

module.exports = router;