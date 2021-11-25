 const express = require('express');
const path = require('path');
const router = express.Router();
const { check } = require('express-validator');

var controllersOfProducts = require('../controllers/productsControllers');

// paths to product list
router.get('/', controllersOfProducts.productList);

// routes in detail
router.get('/detail/:id', controllersOfProducts.productDetail);
router.post('/detail/:id', controllersOfProducts.productShop);

//searchproduct.
router.get('/searchProduct', controllersOfProducts.searchProduct);


module.exports = router;