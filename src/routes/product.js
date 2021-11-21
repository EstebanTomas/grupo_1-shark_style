 const express = require('express');
const path = require('path');
const router = express.Router();
const { check } = require('express-validator');

var controllersOfProducts = require('../controllers/productsControllers');

router.get('/searchProduct', controllersOfProducts.searchProduct)

// paths to product list
router.get('/', controllersOfProducts.productList);

//searchproduct.


// routes in detail
router.get('/detail/:id', controllersOfProducts.productDetail);



module.exports = router;