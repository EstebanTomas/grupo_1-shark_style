const express = require('express');
const router = express.Router();

var mainControllers = require('../controllers/productsControllers')


router.get('/edit', mainControllers.editProduct);

router.get('/create', mainControllers.productCreate);

router.post('/create', mainControllers.productCreate)

router.get('/detail', mainControllers.productDetail);

router.get('/list', mainControllers.productList);

module.exports = router;