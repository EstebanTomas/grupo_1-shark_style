const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

var controllersOfProducts = require('../controllers/productsControllers')

// paths to product list
router.get('/', controllersOfProducts.productList);
//router.get('/:id', controllersOfProducts.productList);

<<<<<<< HEAD
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
=======
const productsControllers = require('../controllers/productsControllers');

router.get('/edit', productsControllers.editProduct);

router.get('/create', productsControllers.productCreate);

router.post('/create', productsControllers.create)

router.get('/detail', productsControllers.productDetail);

router.get('/list', productsControllers.productList);

module.exports = router
>>>>>>> ebbd8ac68ef5119bce7f5950f0349cf1cf543d42
