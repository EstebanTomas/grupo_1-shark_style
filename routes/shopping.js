const express = require('express');
const router = express.Router();

var shoppingControllers = require('../controllers/shoppingControllers')

router.get('/', shoppingControllers.shopping);

module.exports = router;