const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

var controllersOfProducts = require('../controllers/productsControllers');


// paths to product list
router.get('/', controllersOfProducts.productList);
//router.get('/:id', controllersOfProducts.productList);

// this path shows the edit form
router.get('/:idProducts/edit', controllersOfProducts.editProduct);
router.put('/edit', controllersOfProducts.edit);

// route of create
router.get('/create', controllersOfProducts.productCreate);
router.post('/create', controllersOfProducts.create)

// routes in detail
router.get('/detail/:id', controllersOfProducts.productDetail);

router.delete('/:id', controllersOfProducts.delete);

module.exports = router;
