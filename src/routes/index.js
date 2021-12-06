const express = require("express");
const router = express.Router();

var mainControllers = require("../controllers/mainControllers");

router.get("/", mainControllers.home);
router.post("/:id", mainControllers.filterHome)
router.get("/cart", mainControllers.carrousel);

module.exports = router;
