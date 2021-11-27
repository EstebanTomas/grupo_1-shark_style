 const express = require('express');
const path = require('path');
const router = express.Router();
const { check } = require('express-validator');

var controllersOfProducts = require('../controllers/productsControllers');



// paths to product list
router.get('/', controllersOfProducts.productList);

//searchproduct.
// router.get('/searchResults', controllersOfProducts.searchResults);
router.get('/search', controllersOfProducts.search);

// routes in detail
router.get('/detail/:id', controllersOfProducts.productDetail);



module.exports = router;