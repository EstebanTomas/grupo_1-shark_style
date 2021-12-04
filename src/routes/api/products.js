const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/api/productsController");

router.get("/api/products", usersController.list);

router.get("/api/products/:id", usersController.detail);

module.exports = router;