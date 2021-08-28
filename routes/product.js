const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

var mainControllers = require('../controllers/productsControllers')


const productsControllers = require('../controllers/productsControllers');

router.get('/edit', productsControllers.editProduct);

router.get('/create', productsControllers.productCreate);

router.post('/create', productsControllers.productCreate)

router.get('/detail', productsControllers.productDetail);

router.get('/list', productsControllers.productList);

module.exports = router