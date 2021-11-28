const express = require('express');
const router = express.Router();

var shoppingControllers = require('../controllers/shoppingControllers')

// shoppingCart
router.get('/', shoppingControllers.shopping);

// editar un product_shop
router.put('/edit/:id', shoppingControllers.edit);

// comprar todo en el carrito
router.delete('/delete/:id', shoppingControllers.delete);

// comprar todo en el carrito
router.post('/', shoppingControllers.buy);

// compraste en el carrito
router.get('/congratulations', shoppingControllers.congra);

module.exports = router;