    const express = require('express');
    const router = express.Router();

    var mainControllers = require('../controllers/mainControllers')

    router.get('/', mainControllers.home);

router.get('/cart', mainControllers.carrousel);

module.exports = router;