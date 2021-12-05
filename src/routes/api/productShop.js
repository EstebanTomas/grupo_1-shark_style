const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/api/productShopController");

router.get("/api/products_shop", usersController.list);

module.exports = router;