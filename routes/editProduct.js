const express = require('express');
const router = express.Router();

var mainControllers = require('../controllers/mainControllers')

router.get('/', mainControllers.editProduct);

module.exports = router;