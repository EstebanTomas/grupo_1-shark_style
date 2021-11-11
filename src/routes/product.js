const express = require('express');
const path = require('path');
const router = express.Router();
const { check } = require('express-validator');

var controllersOfProducts = require('../controllers/productsControllers');
const Upload = require("../../middlewares/saveImgProductsMiddlewares");

// paths to product list
router.get('/', controllersOfProducts.productList);
//router.get('/:id', controllersOfProducts.productList);
router.get('/admin', controllersOfProducts.administration)
// this path shows the edit form
router.get('/edit/:id', controllersOfProducts.editProduct);
router.put('/edit/:id', controllersOfProducts.edit);
// route of create
router.get('/create', controllersOfProducts.productCreate);
router.post('/create', Upload.array("img", 3), controllersOfProducts.create);
// routes in detail
router.get('/detail/:id', controllersOfProducts.productDetail);
// routes in delete
router.get('/delete/:id', controllersOfProducts.delete);


module.exports = router;